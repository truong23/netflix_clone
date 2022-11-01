import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleUp } from "react-icons/fa";
import MoviesRow from "./MoviesRow";
import { getActionMovies, getComedyMovies, getDocumentaries, getHorrorMovies, getNetflixOriginals, getRomanceMovies, getTopRatedMovies, getTrendingMovies } from "../store/actions";
import styled from "styled-components";
import { animateScroll as scroll} from "react-scroll";
import { useScrollY } from "../hooks";


const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const { 
        NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries
     } = useSelector(state => state.infoMovies)
    
    useEffect(() => {
        dispatch(getNetflixOriginals())
        dispatch(getTrendingMovies())
        dispatch(getTopRatedMovies())
        dispatch(getActionMovies())
        dispatch(getComedyMovies())
        dispatch(getHorrorMovies())
        dispatch(getRomanceMovies())
        dispatch(getDocumentaries())
    },[dispatch])

      return ( 
        <div>
            <MoviesRow movies={NetflixOriginals} title='Netflix Originals' isNetflix={true}  idSection = 'netfix'/>
            <MoviesRow movies={TrendingMovies} title='Trending Movies' isNetflix={true} idSection = 'trending'/>
            <MoviesRow movies={TopRatedMovies} title='Top Rated Movies' idSection = 'topRated'/>
            <MoviesRow movies={ActionMovies} title='Action Movies' idSection = 'actionMovies'/>
            <MoviesRow movies={ComedyMovies} title='Comedy Movies' idSection = 'comedyMovies'/>
            <MoviesRow movies={HorrorMovies} title='Horror Movies' idSection = 'horrorMovies'/>
            <MoviesRow movies={RomanceMovies} title='Romance Movies' idSection = 'romanceMovies'/>
            <MoviesRow movies={Documentaries} title='Documentaries' idSection = 'documentariesMovies'/>
            <GoToTop 
                onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <FaArrowAltCircleUp />
            </GoToTop>
        </div>
    );
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.4);
    transition: all .3s linear;

    &:hover {
        color: rgba(255, 255, 255, 0.8)
    }

    @media screen and (max-width: 600px){
        right: 40px;
    }
`