import { useState, useEffect } from "react";
import ViewDishList from "./ViewDishList";
import { BACKEND_API } from "../../config";

const ViewDishes = (props) => {

    const API_URL = `${BACKEND_API}/api/v1/dishes/`;

    const [dishes, setDishes] = useState([
    ]);

    useEffect(() => {
        const getDishes = async () => {
            const dishesFromServer = await fetchDishes();
            let filteredDishes = dishesFromServer.filter((dish) => dish.kitchenId === props.kitchenId);
            let dishesFixed = filteredDishes.map((dish) => ({ name: dish.name, description: dish.description, veg: dish.veg, id: dish._id, imageurl: dish.imageurl }));
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
        <div>
            <h2 className='heading' style={{textAlign: "center"}}>DISHES OFFERED</h2>
            <div className='dishlist-view-container'>
                <ViewDishList dishes={dishes} />
            </div>
        </div>
    )
}

export default ViewDishes