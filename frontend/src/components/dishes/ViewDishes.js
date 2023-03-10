import { useState, useEffect } from "react";
import ViewDishList from "./ViewDishList";

const ViewDishes = () => {

    const API_URL = "http://localhost:8080/api/v1/dishes/";

    const [dishes, setDishes] = useState([
    ]);

    useEffect(() => {
        const getDishes = async () => {
            const dishesFromServer = await fetchDishes();
            let dishesFixed = dishesFromServer.map((dish) => ({ name: dish.name, description: dish.description, veg: dish.veg, id: dish._id }));
            setDishes(dishesFixed);
        }
        getDishes();
    }, [dishes]); //[dishes]Hack for getting data again from server after adding new dish, post dish await not working as expected

    const fetchDishes = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        //    console.log(data);
        return data;
    }

    return (
        <>
            <h2 style={{textAlign: "center"}}>Dishes Offered</h2>
            <div className='container'>
                <ViewDishList dishes={dishes} />
            </div>
        </>
    )
}

export default ViewDishes