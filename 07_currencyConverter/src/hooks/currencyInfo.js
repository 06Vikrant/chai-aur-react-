import { useEffect, useState } from "react";

// --------------- //
    // Custom HOOKs //
// ----------------- //

// this hook will return us the data
function useCurrencyInfo(currency) {
    // why an {} object? in case if fetch call ni a rhi h to empty object pe loop lagane se crash to ni hogi site
    const [data, setData] = useState({}) 
    // when this hook loads/someone uses then only we call this hook/api we call
    // useEffect:  after invoking it when the component is mounts(life cycle trigger)/unmounts
    // useEffect will automatically calls the fetch 
    useEffect(() => {
        // api call
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    // From line 6-16 we're returning data //
    console.log(data);
    return data;
}

export default useCurrencyInfo;