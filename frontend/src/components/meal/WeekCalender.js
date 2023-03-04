import WeekButton from "./WeekButton";
import { useState, useEffect } from "react";
import SelectDishes from "./SelectDishes";

const WeekCalender = () => {

    const MEAL_API_URL = "http://localhost:8080/api/v1/meal/";


    const currDate = new Date();
    const options = { weekday: "long" };
    const noOfDishesFromDB = 2;

    const [dishData, setDishData] = useState([
        {
            date: -1,
            dishes: [],
            dishesSelected: false
        },
        {
            date: -1,
            dishes: [],
            dishesSelected: false
        },
        {
            date: -1,
            dishes: [],
            dishesSelected: false
        },
        {
            date: 2,
            dishes: ["afe21414", "faga3413"],
            dishesSelected: true
        },
        {
            date: 3,
            dishes: ["eabaa62623", "efagg2525"],
            dishesSelected: true
        },
        {
            date: 4,
            dishes: [],
            dishesSelected: false
        },
        {
            date: 5,
            dishes: [],
            dishesSelected: false
        }
    ]);



    const [mealData, setMealData] = useState([]);

    const [testingText, setTestingText] = useState("Testing Text");
    const [noOfDishes, setNoOfDishes] = useState(noOfDishesFromDB);
    const [enableDishesComp, setEnableDishesComp] = useState(false);

    const onWeekButtonClick = (data) => {
        let testText = ""
        setEnableDishesComp(true);
        if (data.date === -1) {
            testText = "Disable Comp.";
            setEnableDishesComp(false);
        } else if (!data.dishesSelected && data.dishes.length === 0) {
            testText = "Enable Selection";
        } else {
            testText = "Show Selection";
        }

        setTestingText(testText);
        //        setNoOfDishes(noOfDishesFromDB);
        setMealData(data);
    };

    const makeWeekCal = () => {
        let buttons = [];

        for (let i = 0; i < 7; i++) {
            let date = new Date(currDate.setDate(currDate.getDate() - currDate.getDay() + i + 1));
            let day = new Intl.DateTimeFormat("en-US", options).format(date);
            let dayText = date.getDate() + " " + day;

            let data = dishData[i];
            let color = "black";

            if (data.date === -1) {
                color = "red";
            } else if (data.dishes.length === 0) {
                color = "green";
            } else {
                color = "grey";
            }


            buttons.push(<WeekButton data={data} color={color} key={i} text={dayText} onClick={onWeekButtonClick} />);
        }
        return buttons;
    };

    const postMeal = (meal) => {
        fetch(MEAL_API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(meal)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return data;
            });
    }

    const onSaveButtonClick = (data) => {

        if (data.dishes.length < noOfDishes) {
            alert("Please select all Dishes");
            return;
        }

        data.dishesSelected = true;
        setMealData({
                date: data.date,
                dishes: data.dishes,
                dishesSelected: data.dishesSelected
            }
        );

        postMeal({
            date: data.date,
            dishes: data.dishes,
            customerId: "c1",
            kitchenId: "k1",
            planId:"p1"
        });
    };

    return (
        <div>

            {makeWeekCal()}
            <br></br>
            <br></br>
            {enableDishesComp && <SelectDishes data={mealData} noOfDishes={noOfDishes} onClickSave={onSaveButtonClick} />}
            <br></br>
            {testingText}
        </div>
    )
}

export default WeekCalender