import React from 'react'
import { useId } from 'react';
    

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChage,
    currencyOptions = [], // used to stop crashing the app
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // gives the unique value random string numbers ko use krte hue
    // if gets the unique value then we bind with the value we get
    // i.e, binding label with the input value
    // this is a unique ID
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label 
                htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // when the amount is changed
                    // if onAmountChange is available then only nhi to && and use the other condition
                    // i.e, it's a checker whether this exists or not
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    // current value
                    value={selectCurrency}
                    // change the current value
                    onChange={(e) => onCurrencyChage && onCurrencyChage(e.target.value)  
                    }
                    disabled={currencyDisable}
                >                    

                   {currencyOptions.map((currency) => (
                            <option
                            // To bring performance in loop to repeat the elements then we have to pass the key
                            key={currency}
                            value= {currency}>
                                {currency}
                            </option>
                   ))} 

                
                </select>
            </div>
        </div>
    );
}
    

export default InputBox