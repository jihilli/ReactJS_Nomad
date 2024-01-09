import React, { useEffect, useState } from "react";

import Todo from "./Todo";
import CoinTracker from "./CoinTracker";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
        // const json = await response.json();
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    /*
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    }, []);
    console.log(movies);
    */

    return (
        <div>
            {/* <Todo /> */}
            {/* <CoinTracker /> */}
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;

/*
map 함수 : 배열의 각 아이템에 내가 원하는대로 
[1,2,3,4].map(x => x*2) -> [2,4,6,8]
*/
