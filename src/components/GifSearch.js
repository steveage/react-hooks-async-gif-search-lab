import { useState } from "react";

function GifSearch({ onSearch }) {
    const [queryString, setUserQueryString] = useState("");

    function handleChange(e) {
        setUserQueryString(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(queryString);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term</label>
            <input type={"text"} name="queryString" id="queryString" value={queryString} onChange={handleChange}/>
            <button type="submit">Find Gifs</button>
        </form>
    )
}

export default GifSearch;