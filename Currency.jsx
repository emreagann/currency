import React, { useState } from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_cJz74es5ujmio7XXPtJfUNElI9uy200ZTtXgVvIM";
function Currency() {
  const[amount,setAmount] = useState();
  const[fromCurrency,setFromCurrency] = useState('USD');
  const[toCurrency,setToCurrency] = useState('TRY');
    const[result,setResult] = useState();

    const exchange = async() =>{
const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
setResult(response.data.data[toCurrency]* amount).toFixed(2);
    }
  return (
    <div className='currency-div'>
      <div style={{fontFamily:'arial',backgroundColor:'black',color:'white',width:'100%',textAlign:'center'}}>
        <h3>Currency App</h3>
      </div>
      <div style={{marginTop:'25px'}}>
      <input value={amount} onChange={(e) => setAmount(e.target.value)}
      type="number" className='amount'/>
<select onChange={(e) => setFromCurrencyfromCurrency(e.target.value)} className='from-currency-option'>
  <option>USD</option>
  <option>EUR</option>
  <option>TRY</option>
</select>
<FaRegArrowAltCircleRight style={{fontSize:'25px',marginRight:'10px',marginTop:'5px'}} />
<select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
  <option>USD</option>
  <option>EUR</option>
  <option>TRY</option>

</select>
<input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result'/>
      </div>
    <div>
    <button onClick={exchange} className='exchange-button'>Convert</button>

    </div>
    </div>
  )
}

export default Currency