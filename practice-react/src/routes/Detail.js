import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // url의 값(params) 데려오기

const Detail = () => {
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>Detail</h1>
        </div>
    );
};

export default Detail;
