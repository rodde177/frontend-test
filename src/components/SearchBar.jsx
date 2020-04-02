import React, { useState } from "react";

const SearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(value);
    };

    const handleChange = (e) => {
        e.preventDefault();

        setValue(e.target.value);
        //console.log(value);
    };

    const [value, setValue] = useState('');
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={value}
            onChange={handleChange}></input>
        </form>
    );
}
export default SearchBar;