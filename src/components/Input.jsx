import { useState } from "react";
import Result from "./Result.jsx"
import BarCode from "./BarCode.jsx"
import "./Input.css";

function Input() {
  const [upc, setUpc] = useState("");
  const [temp, setTemp] = useState("");
  const [flag, setflag] = useState(0);


  function getinput(e) {
    setTemp(e.target.value);
  }

  function submitInput() {
    setUpc(temp);
  }
  function setFlag()
  {
    setflag(1)
  }

  // return (
    
    if(upc === ""&&flag==0)  {
      return(<div>
        <div className="search-box">
          <input
            type="text"
            id="input-box"
            placeholder="Type UPC Code"
            onChange={getinput}
          />
          <button className="search" onClick={submitInput}>
            Submit
          </button>
        </div>
        <div className="imge">
          OR
        </div>
        <div className="button-div"><button className="button" onClick={setFlag}>Click to scan Barcode</button></div>
      </div>)
    }
      else if(upc==""&&flag==1)
      {
        return(
          <BarCode/>
        )
      }
    else if(upc!=""&&flag==0){
return(
  <Result data={upc}/>
)
    }
}

export default Input;