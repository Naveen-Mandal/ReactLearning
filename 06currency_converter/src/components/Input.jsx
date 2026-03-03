import React, {useId} from "react";

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],   //we have taken currency as empty array bydefault so that our app will not get crash.
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,


    className = "",
}) {

    const amountInputId = useId();   //this is for optimization. this will create unique id. whenever this component will be used for label.
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
            {/* if this component is used more than two times ans we use hardcoded htmlFor = "amount" then this label will bind with all input with id = "amount" and two element with same id will create broken behaviour dom will completely ignore second element with same id. */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id= {amountInputId}  //this is for binding label and label
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //some times e.target.value returns string thats it is type casted into Number
                    // if while using this component if onAmountChange is not passed then our app will get crash thats why onAmountChange && onAmountChange(.....) is used it means if onAmountChange exists then call it otherwise do nothing
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}

                >

                    {
                        currencyOptions.map((currency) => (     // react gets confuse here whether if it is create the same dom again and again thats why we have to pass a key with option. 
                        // Remember the keys in loops in react always.
                        // value → is what gets sent when user selects it
                             <option key={currency} value={currency}>   
                                {currency}
                                {/* {currency} → is what gets displayed to the user */}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
}

export default Input;
