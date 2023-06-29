import {useState} from "react"; //importing specific function called useState from react library

export default function Drink () { //define function Drink. export default means that it can be used in different part of code. 
    const [drinkType, setDrinkType] = useState("reds") //creates a state variable called drinkType and funciton called setDrinkType. Initial value of drinkType is set to reds.
    const [drinkList, setDrinkList] = useState();
    
    const getDrink = async(drinkType) => {  //create a function called getDrink and using async have a parameter drinkType
        const res = await fetch (`https://api.sampleapis.com/wines/${drinkType}`); //
        const data = await res.json(); // create variable called data. get all informaiton and convert to json
        setDrinkList(data); //update set drink list with json format called data
    }
    return (
        <section>
            <nav>
                <button onClick={ () => setDrinkType("reds")}>Red</button>
                <button onClick={ () => setDrinkType ("whites")}>White</button>
                <button onClick={ () => setDrinkType ("sparkling")}>Sparkling</button>
                <button onClick={ () => setDrinkType("rose")}>Rose</button>
                <button onClick={ () => setDrinkType("desert")}>Dessert</button>
                <button onClick={ () => setDrinkType ("port")}>Port</button>
            </nav>

            <div>
                <button onClick={ () => getDrink(drinkType)}>Get Drink</button>
            </div>

            <h2>{drinkType}</h2>
            <div className="drink-list">
                {
                    !drinkList
                        ?<p>No List</p>
                        : drinkList.map( (element,index) => {
                            return (
                                <div key ={index}>
                                    <img src={element.image} alt="cover"/>
                                    <h3>{element.wine}</h3>
                                    <p>Location:{element.location}</p>
                                    <p>Rating: {element.rating.average}</p>
                                    <p>Reviews: {element.rating.reviews}</p>
                                </div>);
                        })
                }
            </div>
        </section>
    )
}