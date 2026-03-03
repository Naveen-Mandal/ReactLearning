// Hooks most of the time returns only pure js not jsx thats why we have created js file not jsx file.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data , setData] = useState({})  // we are assinging default value of data as empty object. So that our application will not crash when no data is returned.
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then(res  => setData(res["rates"]))
            console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;