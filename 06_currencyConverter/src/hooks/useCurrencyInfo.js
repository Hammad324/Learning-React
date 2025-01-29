import {useEffect, useState} from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({}); // looping an empty object in case the api return no response, savng the app from crashing
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // if a regular variable is used changes will not be updated in UI therefore we are updating the state and using useState hook to hold the res and setData to put the response in data variable. This will trigger a re-render and update the UI.
        .catch((error) => {
            return error.message
        })
    }, [currency])
    return data;
};

// Important info for using useState in useCurrencyInfo function.

// The useState hook is used to declare state variables in functional components. When the state is updated using the setter function (in this case, setData), React schedules a re-render of the component, ensuring the UI reflects the latest state.
//  If you use a regular variable, changes to that variable do not inform React that the component needs to re-render. Therefore, the UI will not update when the variable's value changes.

export default useCurrencyInfo;