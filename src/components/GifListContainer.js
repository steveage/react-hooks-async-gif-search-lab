import { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer({ url, apiKey }) {
    const [gifs, setGifs] = useState([]);

    function onSearch(queryString) {
        const fullUrl = `${url}${queryString}&api_key=${apiKey}&rating=g&limit=3`;
        fetch(fullUrl)
            .then(response => response.json())
            .then(responseData => process(responseData));

        function process(responseData) {
            const gifUrls = responseData.data.map(gif => gif.images.original.url);
            setGifs(gifUrls);
        }
    }

    return (
        <div>
            <GifSearch onSearch={onSearch}/>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer;