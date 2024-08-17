import React, { useState } from 'react';
import './Manual.css';

const Manual = () => {
  const [energy, setenergy]=useState(0);
  const [carb, setcarb]=useState(0);
  const [salt, setsalt]=useState(0);
  const [sugar, setsugar]=useState(0);
  const [fat, setfat]=useState(0);
  const [fiber, setfiber]=useState(0);
  const [protein, setprotein]=useState(0);
  const [vege, setvege]=useState(0);
  const [option, setoption] = useState(1);


   
  function solve()
  {

  }
  function sodium(e)
  {
    setsalt(e.target.value);
  }
  function ener(e)
  {
    setenergy(e.target.value);
  }
  function fatt(e)
  {
    setfat(e.target.value);
  }
  function carbo(e)
  {
    setcarb(e.target.value);
  }
  function sug(e)
  {
    setsugar(e.target.value);
  }
  function fib(e)
  {
    setfiber(e.target.value);
  }
  function pro(e)
  {
    setprotein(e.target.value);
  }
  function veg(e)
  {
    setvege(e.target.value);
  }
  function select(e)
  {
    if(e.target[0].selected==1)
    {
      setoption(1);
    }
    else if(e.target[1].selected==1)
    {
      setoption(2);

    }
    else if(e.target[2].selected==1)
    {
      setoption(3);

    }
  }
  return (
    <>
      <div className="dropdown">Select Category:
        <select name="category" onChange={select}>
    <option value="Bevrage">Bevrage</option>
    <option value="Non_Bevrage">Non Bevrage</option>
    <option value="Fruits">Fruits</option>
  </select>
            

        </div>
    <div className="container">
      <div className="input">
    
        <h1>Negative points</h1>
       
        <input className="box" placeholder="Enter Energy in Kcal" onChange={ener}></input>
        <input className="box" placeholder="Enter Fat in Grams" onChange={fatt}></input>
        <input className="box" placeholder="Enter Total Sugar in Grams" onChange={sug}></input>
        <input className="box" placeholder="Enter Sodium in Grams" onChange={sodium}></input>
        <input className="box" placeholder="Enter Carbohydrate in Grams" onChange={carbo}></input>
      </div>
      <div className="input">
      <h1>Positive points</h1>
        <input className="box" placeholder="Enter Fiber in Grams" onChange={fib}></input>
        <input className="box" placeholder="Enter Protein in Grams" onChange={pro}></input>
        <input className="box" placeholder="Enter any vegetable or fruit content in %" onChange={veg}></input>
      </div>
    </div>
      
      <div className='submit' onClick={solve}><button>Submit</button></div>
      </>
  );
};

export default Manual;
