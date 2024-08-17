import { useState, useEffect } from 'react';
import { nutdata } from "./upcdata.json";
import A from "../assets/A.svg"
import B from "../assets/B.svg"
import C from "../assets/C.svg"
import D from "../assets/D.svg"
import E from "../assets/E.svg"
import "./Result.css";

function Result({ data }) {
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState(null);


    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v3/product/${data}.json`)
            .then((response) => response.json())
            .then((res) => {
                setProduct(res.product);
                setStatus(res);
            });
    }, [data]);

    if (!product&&!status) {
        return <div className="notfound">Loading...</div>;
    }
    else if(product&&status!="success"&&!product.nutriments||!product&&status!="success")
    {
        return <div className="notfound">Item Not Found: {data}</div>
    }
    let score=0, flag=0
    let energy=0, sugar=0, fats=0, salt=0, veg=0, fibre=0, protein=0
    if(product.categories_hierarchy)
    for(let i=0;i<product.categories_hierarchy.length;i++)
    {
        if(product.categories_hierarchy[i]=="en:beverages")
        {
            flag=1;
        }
    }
    if(flag==1)
    {
        
        if(product.nutriments.energy_value<7.2)
        {
            energy=0
        }
        else if(product.nutriments.energy_value>=7.2&&product.nutriments.energy_value<14.3)
        {
            energy=1
        }
        else if(product.nutriments.energy_value>=14.3&&product.nutriments.energy_value<21.5)
            {
                energy=2
            }
            else if(product.nutriments.energy_value>=21.5&&product.nutriments.energy_value<28.5)
                {
                    energy=3
                }
                else if(product.nutriments.energy_value>=28.5&&product.nutriments.energy_value<35.9)
                    {
                        energy=4
                    }
                    else if(product.nutriments.energy_value>=35.9&&product.nutriments.energy_value<43)
                        {
                            energy=5
                        }
                        else if(product.nutriments.energy_value>=43&&product.nutriments.energy_value<50.2)
                            {
                                energy=6
                            }
                            else if(product.nutriments.energy_value>=50.2&&product.nutriments.energy_value<57.4)
                                {
                                    energy=7
                                }
                                else if(product.nutriments.energy_value>=57.4&&product.nutriments.energy_value<64.5)
                                    {
                                        energy=8
                                    }
                                    else if(product.nutriments.energy_value>=64.5&&product.nutriments.energy_value<72.5)
                                        {
                                            energy=9
                                        }
                                        else if(product.nutriments.energy_value>=72.5)
                                            {
                                                energy=10
                                           }
    if(product.nutriments.sugars_100g<=0)
    {
        sugar=0
    }
    else if(product.nutriments.sugars_100g>0&&product.nutriments.sugars_100g<=1.5)
    {
        sugar=1
    }
    else if(product.nutriments.sugars_100g>1.5&&product.nutriments.sugars_100g<=3)
        {
            sugar=2
        }
        else if(product.nutriments.sugars_100g>3&&product.nutriments.sugars_100g<=4.5)
            {
                sugar=3
            }
            else if(product.nutriments.sugars_100g>4.5&&product.nutriments.sugars_100g<=6)
                {
                    sugar=4
                }
                else if(product.nutriments.sugars_100g>6&&product.nutriments.sugars_100g<=7.5)
                    {
                        sugar=5
                    }
                    else if(product.nutriments.sugars_100g>7.5&&product.nutriments.sugars_100g<=9)
                        {
                            sugar=6
                        }
                        else if(product.nutriments.sugars_100g>9&&product.nutriments.sugars_100g<=10.5)
                            {
                                sugar=7
                            }
                            else if(product.nutriments.sugars_100g>10.5&&product.nutriments.sugars_100g<=12)
                                {
                                    sugar=8
                                }
                                else if(product.nutriments.sugars_100g>12&&product.nutriments.sugars_100g<=13.5)
                                    {
                                        sugar=9
                                    }
                                    else if(product.nutriments.sugars_100g>13.5)
                                        {
                                            sugar=10
                                        }

    if(product.nutriments.fat_100g<=1)
    {
        fats=0
    }
    else if(product.nutriments.fat_100g>1&&product.nutriments.fat_100g<=2)
    {
        fats=1
    }
    else if(product.nutriments.fat_100g>2&&product.nutriments.fat_100g<=3)
        {
            fats=2
        }
        else if(product.nutriments.fat_100g>3&&product.nutriments.fat_100g<=4)
            {
                fats=3
            }
            else if(product.nutriments.fat_100g>4&&product.nutriments.fat_100g<=5)
                {
                    fats=4
                }
                else if(product.nutriments.fat_100g>5&&product.nutriments.fat_100g<=6)
                    {
                        fats=5
                    }
                    else if(product.nutriments.fat_100g>6&&product.nutriments.fat_100g<=7)
                        {
                            fats=6
                        }
                        else if(product.nutriments.fat_100g>7&&product.nutriments.fat_100g<=8)
                            {
                                fats=7
                            }
                            else if(product.nutriments.fat_100g>8&&product.nutriments.fat_100g<=9)
                                {
                                    fats=8
                                }
                                else if(product.nutriments.fat_100g>9&&product.nutriments.fat_100g<=10)
                                    {
                                        fats=9
            
                                    }
                                    else if(product.nutriments.fat_100g>10)
                                        {
                                            fats=10
                                        }
    if(product.nutriments. sodium_100g<=90)
    {
        salt=0;
    }
    else if(product.nutriments. sodium_100g>90&&product.nutriments. sodium_100g<=180)
    {
        salt=1;
    }
        else if(product.nutriments. sodium_100g>180&&product.nutriments. sodium_100g<=270)
            {
                salt=2;
            }
            else if(product.nutriments. sodium_100g>270&&product.nutriments. sodium_100g<=360)
                {
                    salt=3;
                }
                else if(product.nutriments. sodium_100g>360&&product.nutriments. sodium_100g<=450)
                    {
                        salt=4;
                    }
                    else if(product.nutriments. sodium_100g>450&&product.nutriments. sodium_100g<=540)
                        {
                            salt=5;
                        }  else if(product.nutriments. sodium_100g>540&&product.nutriments. sodium_100g<=630)
                            {
                                salt=6;
                            }
                            else if(product.nutriments. sodium_100g>630&&product.nutriments. sodium_100g<=720)
                                {
                                    salt=7;
                                }
                                else if(product.nutriments. sodium_100g>720&&product.nutriments. sodium_100g<=810)
                                    {
                                        salt=8;
                                    }
                                    else if(product.nutriments. sodium_100g>810&&product.nutriments. sodium_100g<=900)
                                        {
                                            salt=9;
                                        }
                                        else if(product.nutriments. sodium_100g>900)
                                        {
                                            salt=10;
                                        }
        if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']<=40)
        {
            veg=0
        }
        else if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']>40&&product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']<=60)
        {
            veg=2
        }
        else if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']>60)
        {
            veg=4
        }
        if(product.nutriments.fiber_100g<=0.7)
        {
            fibre=0
        }
        else if(product.nutriments.fiber_100g>0.7&&product.nutriments.fiber_100g<=1.4)
            {
                fibre=1
            }
            else if(product.nutriments.fiber_100g>0.7&&product.nutriments.fiber_100g<=1.4)
                {
                    fibre=2
                }
                else if(product.nutriments.fiber_100g>1.4&&product.nutriments.fiber_100g<=2.1)
                    {
                        fibre=3
                    }
                    else if(product.nutriments.fiber_100g>2.1&&product.nutriments.fiber_100g<=2.8)
                        {
                            fibre=4
                        }
                        else if(product.nutriments.fiber_100g>2.8&&product.nutriments.fiber_100g<=3.5)
                            {
                                fibre=5
                            }
    if(product.nutriments.proteins_100g<=1.6)
    {
        protein=0
    }
    else if(product.nutriments.proteins_100g>1.6&&product.nutriments.proteins_100g<=3.2)
        {
            protein=1
        }
        else if(product.nutriments.proteins_100g>3.2&&product.nutriments.proteins_100g<=4.8)
            {
                protein=2
            }
            else if(product.nutriments.proteins_100g>4.8&&product.nutriments.proteins_100g<=6.4)
                {
                    protein=3
                }
                else if(product.nutriments.proteins_100g>6.4&&product.nutriments.proteins_100g<=8)
                    {
                        protein=4
                    }
                    else if(product.nutriments.proteins_100g>8)
                        {
                            protein=5
                        }
    }
    else{
        if(product.nutriments.energy_value<80)
            {
                energy=0
            }
            else if(product.nutriments.energy_value>=80&&product.nutriments.energy_value<160)
            {
                energy=1
            }
            else if(product.nutriments.energy_value>=160&&product.nutriments.energy_value<240)
                {
                    energy=2
                }
                else if(product.nutriments.energy_value>=240&&product.nutriments.energy_value<320)
                    {
                        energy=3
                    }
                    else if(product.nutriments.energy_value>=320&&product.nutriments.energy_value<400)
                        {
                            energy=4
                        }
                        else if(product.nutriments.energy_value>=400&&product.nutriments.energy_value<480)
                            {
                                energy=5
                            }
                            else if(product.nutriments.energy_value>=480&&product.nutriments.energy_value<560)
                                {
                                    energy=6
                                }
                                else if(product.nutriments.energy_value>=560&&product.nutriments.energy_value<640)
                                    {
                                        energy=7
                                    }
                                    else if(product.nutriments.energy_value>=640&&product.nutriments.energy_value<720)
                                        {
                                            energy=8
                                        }
                                        else if(product.nutriments.energy_value>=720&&product.nutriments.energy_value<800)
                                            {
                                                energy=9
                                            }
                                            else if(product.nutriments.energy_value>=800)
                                                {
                                                    energy=10
                                               }
      if(product.nutriments.sugars_100g<=4.5)
    {
        sugar=0
    }
    else if(product.nutriments.sugars_100g>4.5&&product.nutriments.sugars_100g<=9)
    {
        sugar=1
    }
    else if(product.nutriments.sugars_100g>9&&product.nutriments.sugars_100g<=13.5)
        {
            sugar=2
        }
        else if(product.nutriments.sugars_100g>13.5&&product.nutriments.sugars_100g<=18)
            {
                sugar=3
            }
            else if(product.nutriments.sugars_100g>18&&product.nutriments.sugars_100g<=22.5)
                {
                    sugar=4
                }
                else if(product.nutriments.sugars_100g>22.5&&product.nutriments.sugars_100g<=27)
                    {
                        sugar=5
                    }
                    else if(product.nutriments.sugars_100g>27&&product.nutriments.sugars_100g<=31)
                        {
                            sugar=6
                        }
                        else if(product.nutriments.sugars_100g>31&&product.nutriments.sugars_100g<=36)
                            {
                                sugar=7
                            }
                            else if(product.nutriments.sugars_100g>36&&product.nutriments.sugars_100g<=40)
                                {
                                    sugar=8
                                }
                                else if(product.nutriments.sugars_100g>40&&product.nutriments.sugars_100g<=45)
                                    {
                                        sugar=9
                                    }
                                    else if(product.nutriments.sugars_100g>45)
                                        {
                                            sugar=10
                                        }
    if(product.nutriments.fat_100g<=1)
    {
        fats=0
    }
    else if(product.nutriments.fat_100g>1&&product.nutriments.fat_100g<=2)
    {
        fats=1
    }
    else if(product.nutriments.fat_100g>2&&product.nutriments.fat_100g<=3)
        {
            fats=2
        }
        else if(product.nutriments.fat_100g>3&&product.nutriments.fat_100g<=4)
            {
                fats=3
            }
            else if(product.nutriments.fat_100g>4&&product.nutriments.fat_100g<=5)
                {
                    fats=4
                }
                else if(product.nutriments.fat_100g>5&&product.nutriments.fat_100g<=6)
                    {
                        fats=5
                    }
                    else if(product.nutriments.fat_100g>6&&product.nutriments.fat_100g<=7)
                        {
                            fats=6
                        }
                        else if(product.nutriments.fat_100g>7&&product.nutriments.fat_100g<=8)
                            {
                                fats=7
                            }
                            else if(product.nutriments.fat_100g>8&&product.nutriments.fat_100g<=9)
                                {
                                    fats=8
                                }
                                else if(product.nutriments.fat_100g>9&&product.nutriments.fat_100g<=10)
                                    {
                                        fats=9
            
                                    }
                                    else if(product.nutriments.fat_100g>10)
                                        {
                                            fats=10
                                        }
    if(product.nutriments. sodium_100g<=90)
    {
        salt=0;
    }
    else if(product.nutriments. sodium_100g>90&&product.nutriments. sodium_100g<=180)
    {
        salt=1;
    }
        else if(product.nutriments. sodium_100g>180&&product.nutriments. sodium_100g<=270)
            {
                salt=2;
            }
            else if(product.nutriments. sodium_100g>270&&product.nutriments. sodium_100g<=360)
                {
                    salt=3;
                }
                else if(product.nutriments. sodium_100g>360&&product.nutriments. sodium_100g<=450)
                    {
                        salt=4;
                    }
                    else if(product.nutriments. sodium_100g>450&&product.nutriments. sodium_100g<=540)
                        {
                            salt=5;
                        }  else if(product.nutriments. sodium_100g>540&&product.nutriments. sodium_100g<=630)
                            {
                                salt=6;
                            }
                            else if(product.nutriments. sodium_100g>630&&product.nutriments. sodium_100g<=720)
                                {
                                    salt=7;
                                }
                                else if(product.nutriments. sodium_100g>720&&product.nutriments. sodium_100g<=810)
                                    {
                                        salt=8;
                                    }
                                    else if(product.nutriments. sodium_100g>810&&product.nutriments. sodium_100g<=900)
                                        {
                                            salt=9;
                                        }
                                        else if(product.nutriments. sodium_100g>900)
                                        {
                                            salt=10;
                                        }
        if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']<=40)
        {
            veg=0
        }
        else if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']>40&&product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']<=60)
        {
            veg=1
        }
        else if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']>60&&product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']<=80)
        {
            veg=2
        }
        else if(product.nutriments['fruits-vegetables-legumes-estimate-from-ingredients_100g']>80)
        {
            veg=5
        }
        if(product.nutriments.fiber_100g<=0.7)
        {
            fibre=0
        }
        else if(product.nutriments.fiber_100g>0.7&&product.nutriments.fiber_100g<=1.4)
            {
                fibre=1
            }
            else if(product.nutriments.fiber_100g>0.7&&product.nutriments.fiber_100g<=1.4)
                {
                    fibre=2
                }
                else if(product.nutriments.fiber_100g>1.4&&product.nutriments.fiber_100g<=2.1)
                    {
                        fibre=3
                    }
                    else if(product.nutriments.fiber_100g>2.1&&product.nutriments.fiber_100g<=2.8)
                        {
                            fibre=4
                        }
                        else if(product.nutriments.fiber_100g>2.8&&product.nutriments.fiber_100g<=3.5)
                            {
                                fibre=5
                            }
    if(product.nutriments.proteins_100g<=1.6)
    {
        protein=0
    }
    else if(product.nutriments.proteins_100g>1.6&&product.nutriments.proteins_100g<=3.2)
        {
            protein=1
        }
        else if(product.nutriments.proteins_100g>3.2&&product.nutriments.proteins_100g<=4.8)
            {
                protein=2
            }
            else if(product.nutriments.proteins_100g>4.8&&product.nutriments.proteins_100g<=6.4)
                {
                    protein=3
                }
                else if(product.nutriments.proteins_100g>6.4&&product.nutriments.proteins_100g<=8)
                    {
                        protein=4
                    }
                    else if(product.nutriments.proteins_100g>8)
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
                <h1>{product.product_name}</h1>
            </div>
            <div className='row'>
            <img className='image' src={product.image_front_url} alt={product.product_name} />
            <div className='table-back'>
            <ul className="table">
                <li><h3 style={{ display: 'inline-block' }}>NUTRITION CHART</h3></li>
                <li>Serving Per 100 g/ml</li>
                <li>Total Sugar: {product.nutriments.sugars_100g} g</li>
                <li>Sodium: {product.nutriments.sodium_100g} mg</li>
                <li>Protein: {product.nutriments.proteins_100g} g</li>
                <li>Fat: {product.nutriments.fat_100g} g</li>
                <li>Carbohydrate: {product.nutriments.carbohydrates_100g} g</li>
                <li>Energy: {product.nutriments.energy_value} kcal</li>
                <li>Fiber: {product.nutriments.fiber_value} g</li>
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
