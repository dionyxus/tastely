import Button from "../dishes/Button";
import { useState, useEffect } from "react";


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
            <select
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

    const DISHES_API_URL = "http://localhost:8080/api/v1/dishes/";
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
                        <label>
                            {"Dish " + (i + 1) + "   "}
                            <select>
                                <option>{dishName}</option>
                            </select>
                            <br></br>
                        </label>
                    </>
                );
            } else {
                showSaveButton = true;
                dishField.push(
                    <>
                        <label>
                            {"Dish " + (i + 1) + "   "}
                            <DishSelect key={i} index={i} dishes={dishes} selectedDish={handleOnValueChange} />
                            <br></br>
                        </label>
                    </>
                );
            }
        }
        return dishField
    }

    return (
        <div style={{marginLeft: "auto",marginRight:"auto", width:"50%"}}>
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