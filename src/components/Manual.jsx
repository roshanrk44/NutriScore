import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Manual.css';
import A from "../assets/A.svg"
import B from "../assets/B.svg"
import C from "../assets/C.svg"
import D from "../assets/D.svg"
import E from "../assets/E.svg"
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
  const [flag, setflag]=useState(false)

  const location = useLocation();
console.log(location)
  useEffect(() => {
    setflag(0);
  }, [location]); 
  function solve()
  {
    setflag(true); 
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
  let score=0
  let ene=0, suga=0, fats=0, sal=0, vegetable=0, fibre=0, prot=0
  if(energy<7.2)
    {
        ene=0
    }
    else if(energy>=7.2&&energy<14.3)
    {
        ene=1
    }
    else if(energy>=14.3&&energy<21.5)
        {
            ene=2
        }
        else if(energy>=21.5&&energy<28.5)
            {
                ene=3
            }
            else if(energy>=28.5&&energy<35.9)
                {
                    ene=4
                }
                else if(energy>=35.9&&energy<43)
                    {
                        ene=5
                    }
                    else if(energy>=43&&energy<50.2)
                        {
                            ene=6
                        }
                        else if(energy>=50.2&&energy<57.4)
                            {
                                ene=7
                            }
                            else if(energy>=57.4&&energy<64.5)
                                {
                                    ene=8
                                }
                                else if(energy>=64.5&&energy<72.5)
                                    {
                                        ene=9
                                    }
                                    else if(energy>=72.5)
                                        {
                                            ene=10
                                       }
  if(sugar<=0)
  {
    suga=0
  }
  else if(sugar>0&&sugar<=1.5)
  {
    suga=1
  }
  else if(sugar>1.5&&sugar<=3)
    {
        suga=2
    }
    else if(sugar>3&&sugar<=4.5)
        {
            suga=3
        }
        else if(sugar>4.5&&sugar<=6)
            {
                suga=4
            }
            else if(sugar>6&&sugar<=7.5)
                {
                    suga=5
                }
                else if(sugar>7.5&&sugar<=9)
                    {
                        suga=6
                    }
                    else if(sugar>9&&sugar<=10.5)
                        {
                            suga=7
                        }
                        else if(sugar>10.5&&sugar<=12)
                            {
                                suga=8
                            }
                            else if(sugar>12&&sugar<=13.5)
                                {
                                    suga=9
                                }
                                else if(sugar>13.5)
                                    {
                                        suga=10
                                    }

  if(fat<=1)
  {
    fats=0
  }
  else if(fat>1&&fat<=2)
  {
    fats=1
  }
  else if(fat>2&&fat<=3)
    {
        fats=2
    }
    else if(fat>3&&fat<=4)
        {
            fats=3
        }
        else if(fat>4&&fat<=5)
            {
                fats=4
            }
            else if(fat>5&&fat<=6)
                {
                    fats=5
                }
                else if(fat>6&&fat<=7)
                    {
                        fats=6
                    }
                    else if(fat>7&&fat<=8)
                        {
                            fats=7
                        }
                        else if(fat>8&&fat<=9)
                            {
                                fats=8
                            }
                            else if(fat>9&&fat<=10)
                                {
                                    fats=9
        
                                }
                                else if(fat>10)
                                    {
                                        fats=10
                                    }
  if(salt<=90)
  {
    sal=0;
  }
  else if(salt>90&&salt<=180)
  {
    sal=1;
  }
    else if(salt>180&&salt<=270)
        {
            sal=2;
        }
        else if(salt>270&&salt<=360)
            {
                sal=3;
            }
            else if(salt>360&&salt<=450)
                {
                    sal=4;
                }
                else if(salt>450&&salt<=540)
                    {
                        sal=5;
                    }  else if(salt>540&&salt<=630)
                        {
                            sal=6;
                        }
                        else if(salt>630&&salt<=720)
                            {
                                sal=7;
                            }
                            else if(salt>720&&salt<=810)
                                {
                                    sal=8;
                                }
                                else if(salt>810&&salt<=900)
                                    {
                                        sal=9;
                                    }
                                    else if(salt>900)
                                    {
                                        sal=10;
                                    }
    if(vege<=40)
    {
        vegetable=0
    }
    else if(vege>40&&vege<=60)
    {
        vegetable=2
    }
    else if(vege>60)
    {
        vegetable=4
    }
    if(fiber<=0.7)
    {
        fibre=0
    }
    else if(fiber>0.7&&fiber<=1.4)
        {
            fibre=1
        }
        else if(fiber>0.7&&fiber<=1.4)
            {
                fibre=2
            }
            else if(fiber>1.4&&fiber<=2.1)
                {
                    fibre=3
                }
                else if(fiber>2.1&&fiber<=2.8)
                    {
                        fibre=4
                    }
                    else if(fiber>2.8&&fiber<=3.5)
                        {
                            fibre=5
                        }
  if(protein<=1.6)
  {
    prot=0
  }
  else if(protein>1.6&&protein<=3.2)
    {
        prot=1
    }
    else if(protein>3.2&&protein<=4.8)
        {
            prot=2
        }
        else if(protein>4.8&&protein<=6.4)
            {
                prot=3
            }
            else if(protein>6.4&&protein<=8)
                {
                    prot=4
                }
                else if(protein>8)
                    {
                        prot=5
                    }
    if(energy<80)
        {
            ene=0
        }
        else if(energy>=80&&energy<160)
        {
            ene=1
        }
        else if(energy>=160&&energy<240)
            {
                ene=2
            }
            else if(energy>=240&&energy<320)
                {
                    ene=3
                }
                else if(energy>=320&&energy<400)
                    {
                        ene=4
                    }
                    else if(energy>=400&&energy<480)
                        {
                            ene=5
                        }
                        else if(energy>=480&&energy<560)
                            {
                                ene=6
                            }
                            else if(energy>=560&&energy<640)
                                {
                                    ene=7
                                }
                                else if(energy>=640&&energy<720)
                                    {
                                        ene=8
                                    }
                                    else if(energy>=720&&energy<800)
                                        {
                                            ene=9
                                        }
                                        else if(energy>=800)
                                            {
                                                ene=10
                                           }
  if(sugar<=4.5)
  {
    suga=0
  }
  else if(sugar>4.5&&sugar<=9)
  { 
    suga=1
  }
  else if(sugar>9&&sugar<=13.5)
    {
        suga=2
    }
    else if(sugar>13.5&&sugar<=18)
        {
            suga=3
        }
        else if(sugar>18&&sugar<=22.5)
            {
                suga=4
            }
            else if(sugar>22.5&&sugar<=27)
                {
                    suga=5
                }
                else if(sugar>27&&sugar<=31)
                    {
                        suga=6
                    }
                    else if(sugar>31&&sugar<=36)
                        {
                            suga=7
                        }
                        else if(sugar>36&&sugar<=40)
                            {
                                suga=8
                            }
                            else if(sugar>40&&sugar<=45)
                                {
                                    suga=9
                                }
                                else if(sugar>45)
                                    {
                                        suga=10
                                    }
  if(fat<=1)
  {
    fats=0
  }
  else if(fat>1&&fat<=2)
  {
    fats=1
  }
  else if(fat>2&&fat<=3)
    {
        fats=2
    }
    else if(fat>3&&fat<=4)
        {
            fats=3
        }
        else if(fat>4&&fat<=5)
            {
                fats=4
            }
            else if(fat>5&&fat<=6)
                {
                    fats=5
                }
                else if(fat>6&&fat<=7)
                    {
                        fats=6
                    }
                    else if(fat>7&&fat<=8)
                        {
                            fats=7
                        }
                        else if(fat>8&&fat<=9)
                            {
                                fats=8
                            }
                            else if(fat>9&&fat<=10)
                                {
                                    fats=9
        
                                }
                                else if(fat>10)
                                    {
                                        fats=10
                                    }
  if(salt<=90)
  {
    sal=0;
  }
  else if(salt>90&&salt<=180)
    {
    sal=1;
  }
    else if(salt>180&&salt<=270)
        {
            sal=2;
        }
        else if(salt>270&&salt<=360)
            {
                sal=3;
            }
            else if(salt>360&&salt<=450)
                {
                    sal=4;
                }
                else if(salt>450&&salt<=540)
                    {
                        sal=5;
                    }  
                    else if(salt>540&&salt<=630)
                        {
                            sal=6;
                        }
                        else if(salt>630&&salt<=720)
                            {
                                sal=7;
                            }
                            else if(salt>720&&salt<=810)
                                {
                                    sal=8;
                                }
                                else if(salt>810&&salt<=900)
                                    {
                                        sal=9;
                                    }
                                    else if(salt>900)
                                    {
                                        sal=10;
                                    }
    if(vege<=40)
    {
        vegetable=0
    }
    else if(vege>40&&vege<=60)
    {
        vegetable=1
    }
    else if(vege>60&&vege<=80)
    {
        vegetable=2
    }
    else if(vege>80)
    {
        vegetable=5
    }
    if(fiber<=0.7)
    {
        fibre=0
    }
    else if(fiber>0.7&&fiber<=1.4)
        {
            fibre=1
        }
        else if(fiber>0.7&&fiber<=1.4)
            {
                fibre=2
            }
            else if(fiber>1.4&&fiber<=2.1)
                {
                    fibre=3
                }
                else if(fiber>2.1&&fiber<=2.8)
                    {
                        fibre=4
                    }
                    else if(fiber>2.8&&fiber<=3.5)
                        {
                            fibre=5
                        }
  if(protein<=1.6)
  {
    prot=0
  }
  else if(protein>1.6&&protein<=3.2)
    {
        prot=1
    }
    else if(protein>3.2&&protein<=4.8)
        {
            prot=2
        }
        else if(protein>4.8&&protein<=6.4)
            {
                prot=3
            }
            else if(protein>6.4&&protein<=8)
                {
                    prot=4
                }
                else if(protein>8)
                    {
                        prot=5
                    }
  let Total=ene+suga+fats+sal-vegetable-fibre-prot;
  if(Total>=-15&&Total<=-1)
  {
    score=1
  }
  else if(Total>=0&&Total<=2)
      {
    score=2
  }
  else if(Total>=3&&Total<=10)
  {
    score=3
  }
  else if(Total>=11&&Total<=18)
    {
        score=4
    }
    else if(Total>=19&&Total<=40)
        {
            score=5
        }
console.log(score);
  return (
    <>
      <div className="dropdown">Select Category:
      <select name="category" onChange={select}>
    <option value="Bevrage">Bevrage</option>
    <option value="Non_Bevrage">Non Bevrage</option>
    <option value="Fruits">Fruits</option>
  </select>
            

        </div>
    <form className='container'>
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
      </form>
    
      <div className={ flag==0 ? "hidden":"block"}>
    <img className={score!=1 ? "hidden" : "score"} src={A}/>
    <img className={score!=2 ? "hidden" : "score"} src={B}/>
    <img className={score!=3 ? "hidden" : "score"} src={C}/>
    <img className={score!=4 ? "hidden" : "score"} src={D}/>
    <img className={score!=5 ? "hidden" : "score"} src={E}/>

</div>
      <div className={flag==0 ? "submit" : "hidden"} ><button onClick={solve}>Submit</button></div>
      </>
  );
};

export default Manual;
