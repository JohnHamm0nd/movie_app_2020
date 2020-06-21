import React from 'react';
import Axios from 'axios';
import MovieRender from './MovieRender';
import './Movie.css';


class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    //자바스크립트, 리액트는 비동기 동작
    //데이터를 받아오는 것을 기다려야 하므로 동기동작이 필요함
    //async await 사용
    getMovies = async() => {
        const {data: {data: {movies}}} = await Axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        this.setState({movies, isLoading: false})
    };
    componentDidMount() {
        this.getMovies();
    };
    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className='container'>
                {isLoading ? (
                            <div className='loader'>
                                <span className='loader__text'><h1>Loading...</h1></span>
                            </div>
                              ) : (
                                <div className='movies'>
                                    {movies.map(movie => (
                                        <MovieRender
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}
                                        />
                                    ))}
                                </div>
                                    )
                }
            </section>
        )
    };
};

export default App;
