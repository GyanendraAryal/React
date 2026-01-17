import React, { useState, useEffect } from "react";


export const useCurrencyInfo = (curreny) => {

    const[data,setData] = useState({})
    return (
        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[curreny]))
        }, [curreny])
    )
    console.log(data);
    return data;
}
