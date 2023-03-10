import Header from './Header'
import Dishes from './Dishes'
import { useState, useEffect } from "react";
import AddDish from './AddDish';
import KitchenHeader from '../homepage/kitchenheader';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DishesStyle.css';

const DishPage = (props) => {

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

    const [showAddDish, setShowAddDish] = useState(false);

    const postDishes = async (dish) => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dish)
        });

        return await res.json();
    }

    const addDish = async (dish) => {
        const data = await postDishes(dish);
        const id = data._id; //Not Working correctly
        const newDish = { id, ...dish };

        setDishes([...dishes, newDish]);

        // const Id = Math.floor(Math.random() * 1000) + 1;

        // const newDish = { Id, ...dish };
        // setDishes([...dishes, newDish]);
    }

    const deleteDish = async (id) => {
        await fetch(API_URL + id, { method: 'DELETE' });

        setDishes(dishes.filter((dish) => dish.id !== id))
    }

    return (
        <div className="">
            <div className="side-menu-bar">
                <KitchenHeader />
            </div>

            <div className="user-header">
                <FaBell />
                <FaEnvelope />
                <h2>{'Welcome ' + props.loginUser.name + ''}</h2>
                <button className="button">
                    <Link to="/Login">Logout</Link>
                </button>
            </div>
            <div className='container'>
                <Header onAdd={() => setShowAddDish(!showAddDish)} showAdd={showAddDish} />
                {showAddDish && <AddDish onAddDish={addDish} />}
                <Dishes dishes={dishes} onDelete={deleteDish} />
            </div>
        </div>
    )
}

export default DishPage