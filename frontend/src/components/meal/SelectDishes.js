import Button from "../dishes/Button";
import { useState, useEffect } from "react";
import { BACKEND_API } from "../../config";


const DishSelect = ({ value, index, selectedDish, dishes }) => {

    const [selectedValue, setSelectedValue] = useState();

    const handleOnValueChange = (e) => {
        setSelectedValue(e.target.value);
        selectedDish(index, e.target.value);
    }

    const makeDishOptions = () => {
        let dishOptions = [];

        dishes.forEach(dish => {
            dishOptions.push(
                <option key={dish._id} value={dish._id}>{dish.name}</option>
            );
        });

        return dishOptions;
    }

    return (
        <div>
            <select style={{ fontSize: "16px" }}
                value={selectedValue}
                onChange={e => handleOnValueChange(e)}>
                <option default hidden>Select a Dish</option>
                {makeDishOptions()}
                {/* <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option> */}
            </select>
        </div>
    )
}


const SelectDishes = ({ data, onClickSave, noOfDishes, kitchenId }) => {

    const DISHES_API_URL = `${BACKEND_API}/api/v1/dishes/`;
    const [dishes, setDishes] = useState([]);

    let dishField = [];
    let showSaveButton = false;

    const onClick = () => {
        onClickSave(data);
    }

    const handleOnValueChange = (index, value) => {
        //        console.log("Index - " + index);
        //        console.log(value);
        data.dishes[index] = value;
    }

    useEffect(() => {

        //Get Dishes
        fetch(DISHES_API_URL)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                data = data.filter((dish) => dish.kitchenId === kitchenId);
                setDishes(data);
            });

    }, []);



    const makeDishesMenu = () => {

        for (let i = 0; i < noOfDishes; i++) {

            if (data.dishesSelected) {
                let dish = dishes.filter(dish => dish._id === data.dishes[i]);
                let dishName = dish.length > 0 ? dish[0].name : "None";
                dishField.push(
                    <>
                        <label style={{ fontSize: "20px" }}>
                            {"Dish " + (i + 1) + "   "}
                        </label>
                        <select>
                            <option>{dishName}</option>
                        </select>
                    </>
                );
            } else {
                showSaveButton = true;
                dishField.push(
                    <>
                        <label style={{ fontSize: "20px" }}>
                            {"Dish " + (i + 1) + "   "}
                        </label>
                        <DishSelect key={i} index={i} dishes={dishes} selectedDish={handleOnValueChange} />
                    </>
                );
            }
        }
        return dishField
    }

    return (
        <div className="mealDishItem">
            {makeDishesMenu()}
            {showSaveButton && <Button text={"Save"} onClick={onClick} />}
        </div>
    )
}

export default SelectDishes

/*
                            <select
                                value={selectedValue[i]}
                                onChange={e => handleOnValueChange(e, i)}>
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="meat">Meat</option>
                            </select>
*/