import { useState, useEffect } from 'react';
import { nutdata } from "./upcdata.json";
import A from "../assets/A.svg"
import B from "../assets/B.svg"
import C from "../assets/C.svg"
import D from "../assets/D.svg"
import E from "../assets/E.svg"
import "./Result.css";

function Result({ data }) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Find the item with the matching UPC code
        const foundItem = nutdata.find(item => item.upc == data);
        setItem(foundItem);
    }, [data]);

    if (!item) {
        return <div>No data found for UPC: {data}</div>;
    }
    let score=0
    let energy=0, sugar=0, fats=0, salt=0, veg=0, fibre=0, protein=0
    if(item.type=="bev")
    {
        
        if(item.energy<7.2)
        {
            energy=0
        }
        else if(item.energy>=7.2&&item.energy<14.3)
        {
            energy=1
        }
        else if(item.energy>=14.3&&item.energy<21.5)
            {
                energy=2
            }
            else if(item.energy>=21.5&&item.energy<28.5)
                {
                    energy=3
                }
                else if(item.energy>=28.5&&item.energy<35.9)
                    {
                        energy=4
                    }
                    else if(item.energy>=35.9&&item.energy<43)
                        {
                            energy=5
                        }
                        else if(item.energy>=43&&item.energy<50.2)
                            {
                                energy=6
                            }
                            else if(item.energy>=50.2&&item.energy<57.4)
                                {
                                    energy=7
                                }
                                else if(item.energy>=57.4&&item.energy<64.5)
                                    {
                                        energy=8
                                    }
                                    else if(item.energy>=64.5&&item.energy<72.5)
                                        {
                                            energy=9
                                        }
                                        else if(item.energy>=72.5)
                                            {
                                                energy=10
                                           }
    if(item.totalsugar<=0)
    {
        sugar=0
    }
    else if(item.totalsugar>0&&item.totalsugar<=1.5)
    {
        sugar=1
    }
    else if(item.totalsugar>1.5&&item.totalsugar<=3)
        {
            sugar=2
        }
        else if(item.totalsugar>3&&item.totalsugar<=4.5)
            {
                sugar=3
            }
            else if(item.totalsugar>4.5&&item.totalsugar<=6)
                {
                    sugar=4
                }
                else if(item.totalsugar>6&&item.totalsugar<=7.5)
                    {
                        sugar=5
                    }
                    else if(item.totalsugar>7.5&&item.totalsugar<=9)
                        {
                            sugar=6
                        }
                        else if(item.totalsugar>9&&item.totalsugar<=10.5)
                            {
                                sugar=7
                            }
                            else if(item.totalsugar>10.5&&item.totalsugar<=12)
                                {
                                    sugar=8
                                }
                                else if(item.totalsugar>12&&item.totalsugar<=13.5)
                                    {
                                        sugar=9
                                    }
                                    else if(item.totalsugar>13.5)
                                        {
                                            sugar=10
                                        }

    if(item.fat<=1)
    {
        fats=0
    }
    else if(item.fat>1&&item.fat<=2)
    {
        fats=1
    }
    else if(item.fat>2&&item.fat<=3)
        {
            fats=2
        }
        else if(item.fat>3&&item.fat<=4)
            {
                fats=3
            }
            else if(item.fat>4&&item.fat<=5)
                {
                    fats=4
                }
                else if(item.fat>5&&item.fat<=6)
                    {
                        fats=5
                    }
                    else if(item.fat>6&&item.fat<=7)
                        {
                            fats=6
                        }
                        else if(item.fat>7&&item.fat<=8)
                            {
                                fats=7
                            }
                            else if(item.fat>8&&item.fat<=9)
                                {
                                    fats=8
                                }
                                else if(item.fat>9&&item.fat<=10)
                                    {
                                        fats=9
            
                                    }
                                    else if(item.fat>10)
                                        {
                                            fats=10
                                        }
    if(item.salt<=90)
    {
        salt=0;
    }
    else if(item.salt>90&&item.salt<=180)
    {
        salt=1;
    }
        else if(item.salt>180&&item.salt<=270)
            {
                salt=2;
            }
            else if(item.salt>270&&item.salt<=360)
                {
                    salt=3;
                }
                else if(item.salt>360&&item.salt<=450)
                    {
                        salt=4;
                    }
                    else if(item.salt>450&&item.salt<=540)
                        {
                            salt=5;
                        }  else if(item.salt>540&&item.salt<=630)
                            {
                                salt=6;
                            }
                            else if(item.salt>630&&item.salt<=720)
                                {
                                    salt=7;
                                }
                                else if(item.salt>720&&item.salt<=810)
                                    {
                                        salt=8;
                                    }
                                    else if(item.salt>810&&item.salt<=900)
                                        {
                                            salt=9;
                                        }
                                        else if(item.salt>900)
                                        {
                                            salt=10;
                                        }
        if(item.veg<=40)
        {
            veg=0
        }
        else if(item.veg>40&&item.veg<=60)
        {
            veg=2
        }
        else if(item.veg>60)
        {
            veg=4
        }
        if(item.fibre<=0.7)
        {
            fibre=0
        }
        else if(item.fibre>0.7&&item.fibre<=1.4)
            {
                fibre=1
            }
            else if(item.fibre>0.7&&item.fibre<=1.4)
                {
                    fibre=2
                }
                else if(item.fibre>1.4&&item.fibre<=2.1)
                    {
                        fibre=3
                    }
                    else if(item.fibre>2.1&&item.fibre<=2.8)
                        {
                            fibre=4
                        }
                        else if(item.fibre>2.8&&item.fibre<=3.5)
                            {
                                fibre=5
                            }
    if(item.protein<=1.6)
    {
        protein=0
    }
    else if(item.protein>1.6&&item.protein<=3.2)
        {
            protein=1
        }
        else if(item.protein>3.2&&item.protein<=4.8)
            {
                protein=2
            }
            else if(item.protein>4.8&&item.protein<=6.4)
                {
                    protein=3
                }
                else if(item.protein>6.4&&item.protein<=8)
                    {
                        protein=4
                    }
                    else if(item.protein>8)
                        {
                            protein=5
                        }
    }
    else{
        if(item.energy<80)
            {
                energy=0
            }
            else if(item.energy>=80&&item.energy<160)
            {
                energy=1
            }
            else if(item.energy>=160&&item.energy<240)
                {
                    energy=2
                }
                else if(item.energy>=240&&item.energy<320)
                    {
                        energy=3
                    }
                    else if(item.energy>=320&&item.energy<400)
                        {
                            energy=4
                        }
                        else if(item.energy>=400&&item.energy<480)
                            {
                                energy=5
                            }
                            else if(item.energy>=480&&item.energy<560)
                                {
                                    energy=6
                                }
                                else if(item.energy>=560&&item.energy<640)
                                    {
                                        energy=7
                                    }
                                    else if(item.energy>=640&&item.energy<720)
                                        {
                                            energy=8
                                        }
                                        else if(item.energy>=720&&item.energy<800)
                                            {
                                                energy=9
                                            }
                                            else if(item.energy>=800)
                                                {
                                                    energy=10
                                               }
      if(item.totalsugar<=4.5)
    {
        sugar=0
    }
    else if(item.totalsugar>4.5&&item.totalsugar<=9)
    {
        sugar=1
    }
    else if(item.totalsugar>9&&item.totalsugar<=13.5)
        {
            sugar=2
        }
        else if(item.totalsugar>13.5&&item.totalsugar<=18)
            {
                sugar=3
            }
            else if(item.totalsugar>18&&item.totalsugar<=22.5)
                {
                    sugar=4
                }
                else if(item.totalsugar>22.5&&item.totalsugar<=27)
                    {
                        sugar=5
                    }
                    else if(item.totalsugar>27&&item.totalsugar<=31)
                        {
                            sugar=6
                        }
                        else if(item.totalsugar>31&&item.totalsugar<=36)
                            {
                                sugar=7
                            }
                            else if(item.totalsugar>36&&item.totalsugar<=40)
                                {
                                    sugar=8
                                }
                                else if(item.totalsugar>40&&item.totalsugar<=45)
                                    {
                                        sugar=9
                                    }
                                    else if(item.totalsugar>45)
                                        {
                                            sugar=10
                                        }
    if(item.fat<=1)
    {
        fats=0
    }
    else if(item.fat>1&&item.fat<=2)
    {
        fats=1
    }
    else if(item.fat>2&&item.fat<=3)
        {
            fats=2
        }
        else if(item.fat>3&&item.fat<=4)
            {
                fats=3
            }
            else if(item.fat>4&&item.fat<=5)
                {
                    fats=4
                }
                else if(item.fat>5&&item.fat<=6)
                    {
                        fats=5
                    }
                    else if(item.fat>6&&item.fat<=7)
                        {
                            fats=6
                        }
                        else if(item.fat>7&&item.fat<=8)
                            {
                                fats=7
                            }
                            else if(item.fat>8&&item.fat<=9)
                                {
                                    fats=8
                                }
                                else if(item.fat>9&&item.fat<=10)
                                    {
                                        fats=9
            
                                    }
                                    else if(item.fat>10)
                                        {
                                            fats=10
                                        }
    if(item.salt<=90)
    {
        salt=0;
    }
    else if(item.salt>90&&item.salt<=180)
    {
        salt=1;
    }
        else if(item.salt>180&&item.salt<=270)
            {
                salt=2;
            }
            else if(item.salt>270&&item.salt<=360)
                {
                    salt=3;
                }
                else if(item.salt>360&&item.salt<=450)
                    {
                        salt=4;
                    }
                    else if(item.salt>450&&item.salt<=540)
                        {
                            salt=5;
                        }  else if(item.salt>540&&item.salt<=630)
                            {
                                salt=6;
                            }
                            else if(item.salt>630&&item.salt<=720)
                                {
                                    salt=7;
                                }
                                else if(item.salt>720&&item.salt<=810)
                                    {
                                        salt=8;
                                    }
                                    else if(item.salt>810&&item.salt<=900)
                                        {
                                            salt=9;
                                        }
                                        else if(item.salt>900)
                                        {
                                            salt=10;
                                        }
        if(item.veg<=40)
        {
            veg=0
        }
        else if(item.veg>40&&item.veg<=60)
        {
            veg=1
        }
        else if(item.veg>60&&item.veg<=80)
        {
            veg=2
        }
        else if(item.veg>80)
        {
            veg=5
        }
        if(item.fibre<=0.7)
        {
            fibre=0
        }
        else if(item.fibre>0.7&&item.fibre<=1.4)
            {
                fibre=1
            }
            else if(item.fibre>0.7&&item.fibre<=1.4)
                {
                    fibre=2
                }
                else if(item.fibre>1.4&&item.fibre<=2.1)
                    {
                        fibre=3
                    }
                    else if(item.fibre>2.1&&item.fibre<=2.8)
                        {
                            fibre=4
                        }
                        else if(item.fibre>2.8&&item.fibre<=3.5)
                            {
                                fibre=5
                            }
    if(item.protein<=1.6)
    {
        protein=0
    }
    else if(item.protein>1.6&&item.protein<=3.2)
        {
            protein=1
        }
        else if(item.protein>3.2&&item.protein<=4.8)
            {
                protein=2
            }
            else if(item.protein>4.8&&item.protein<=6.4)
                {
                    protein=3
                }
                else if(item.protein>6.4&&item.protein<=8)
                    {
                        protein=4
                    }
                    else if(item.protein>8)
                        {
                            protein=5
                        }
    }
    let Total=energy+sugar+fats+salt-veg-fibre-protein;
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
    return (
        <>
            <div className='name'>
                <h1>{item.name}</h1>
            </div>
            <div className='row'>
            <img className='image' src={item.image} alt={item.name} />
            <div className='table-back'>
            <ul className="table">
                <li><h3 style={{ display: 'inline-block' }}>NUTRITION CHART</h3></li>
                <li>Serving Per {item.quantity}</li>
                <li>Total Sugar: {item.totalsugar} g</li>
                <li>Sodium: {item.salt} mg</li>
                <li>Protein: {item.protein} g</li>
                <li>Fat: {item.fat} g</li>
                <li>Carbohydrate: {item.carbohydrate} g</li>
                <li>Energy: {item.energy} kcal</li>
            </ul>
            </div>
            <div className='block'>
                <img className={score!=1 ? "hidden" : "score"} src={A}/>
                <img className={score!=2 ? "hidden" : "score"} src={B}/>
                <img className={score!=3 ? "hidden" : "score"} src={C}/>
                <img className={score!=4 ? "hidden" : "score"} src={D}/>
                <img className={score!=5 ? "hidden" : "score"} src={E}/>

            </div>
            </div>
        </>
    );
}

export default Result;
