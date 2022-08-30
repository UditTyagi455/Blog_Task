import React, { useState, useEffect } from "react";
import axios from "axios";

export const myApiContext = React.createContext();


const DataOfApi = (props) => {
    const [apiData, setApiData] = useState([]);
    const fetchApi = async () => {
        const { data } = await axios.get("http://localhost:3000/posts");
        setApiData(data);
    }
    useEffect(() => {
        fetchApi();
    });

    return (
        <myApiContext.Provider value={apiData}>
            {props.children}
        </myApiContext.Provider>
    )
}
export default DataOfApi;