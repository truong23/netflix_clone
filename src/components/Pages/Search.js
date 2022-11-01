import { useSelector } from "react-redux"
import MoviesDetail from "../MoviesDetail/MoviesDetail"
import SearchMovies from "../SearchMovies/SearchMovies"

function Search() {
  const { MovieDetail } = useSelector(state => state.infoMovies)

  return (
    <div>
        <SearchMovies />
        <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false }/>
    </div>
  )
}

export default Search