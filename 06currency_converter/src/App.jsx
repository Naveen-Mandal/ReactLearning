import { useState, useEffect } from 'react'
import { Input } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  // const [count, setCount] = useState(0) // here useState() is a function which is returning array of size 2 one is variable and second is reference of a function. That is how we will create custom hooks.

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  // useEffect(()=>{
  //   if(currencyInfo[to]){
  //     setConvertedAmount(amount*currencyInfo[to])
  //   }
  // }, [currencyInfo, from, to, amount])

  const swap = () => {
    const prevAmount = amount;
    const prevConvertedAmount = convertedAmount;
    setAmount(prevConvertedAmount)
    setConvertedAmount(prevAmount)
    const prevTo = to;
    const prevFrom = from;
    setFrom(prevTo)
    setTo(prevFrom)
  }

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) }
  if (options.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-white text-xl">Loading currencies...</p>
            </div>
        );
    }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/158603/wheat-wheat-field-cereals-field-158603.jpeg")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setFrom(currency)}
                selectCurrency= {from}
                onAmountChange={(amt)=>setAmount(amt)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                selectCurrency= {to}
                onCurrencyChange={(currency)=>setTo(currency)}
                amountDisable
                onAmountChange={(amt)=>setConvertedAmount(amt)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
