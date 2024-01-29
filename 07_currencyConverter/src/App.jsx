import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/currencyInfo";
import "./App.css";

function App() {
  // creating the states
  const [amount, setAmount] = useState(0); // set amount actual value to 0
  const [from, setFrom] = useState("inr"); // for the currency state for inr
  const [to, setTo] = useState("usd"); // for the currency usd state to
  const [amountConverted, setAmountConverted] = useState(0); // when click on the button convert

  // creating hooks for currency
  const currencyInfo = useCurrencyInfo(from);

  // from this we get all the keys in the currency and from currencyInfo
  // these are all what currency options
  const options = Object.keys(currencyInfo);

  // swap the currency variables
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmountConverted(amount);
    setAmount(amountConverted);
  };

  // when user clicks on the convert functionallity
  // this state will display the final result to us
  const convert = () => {
    setAmountConverted(amount * currencyInfo[to]);
  };

  return (
    <div
      className="flex flex-wrap justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?auto=compress&cs=tinysrgb&w=400')`,
      }}
    >
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-50 rounded-lg shadow-lg p-6">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChage={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative h-8 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="mb-4">
              <InputBox
                label="To"
                amount={amountConverted}
                currencyOptions={options}
                onCurrencyChage={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable // so that the user cannot change the lower field
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
