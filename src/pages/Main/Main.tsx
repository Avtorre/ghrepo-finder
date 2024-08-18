import classes from './Main.module.css'
import SearchResults from '../../components/SearchResults/SearchResults'
import { RepoItem} from '../../lib/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

//основная страница
//возможно, стоило разместить в папке components, но я создал отдельную папку, т.к. по масштабам этот элемент был больше похож на страницу, чем на встраиваемый компонент
const Main = () => {
  const results: RepoItem[] = useSelector((state: RootState) => state.results.repos)
  const loading: boolean = useSelector((state: RootState) => state.results.loading)
  
  return (
    <div className={classes.main}>
      {(loading) || (results.length) 
        ? (results.length) 
            ? <SearchResults results={results}/>
            : <h1 className={classes.welcome}>Загрузка...</h1>       
        : <h1 className={classes.welcome}>Добро пожаловать</h1>
      }
    </div>
  )
}

export default Main
