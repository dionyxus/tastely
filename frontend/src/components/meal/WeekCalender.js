import WeekButton from "./WeekButton";
import { useState, useEffect } from "react";
import SelectDishes from "./SelectDishes";
import { BACKEND_API } from "../../config";

const WeekCalender = ({ orderId }) => {

    const MEAL_API_URL = `${BACKEND_API}/api/v1/meal/`;
    const SUBSCRIPTION_API_URL = `${BACKEND_API}/showcustomersubscribeplan`;

    const [userInfo, setUserInfo] = useState({});
    //let userInfo;
    const currDate = new Date();
    const options = { weekday: "long" };
    const noOfDishesFromDB = 2;

    //const [dishData, setDishData] = useState([]);
    const [allMealData, setAllMealData] = useState([]);

    useEffect(() => {

        fetch(SUBSCRIPTION_API_URL)
            .then(res => res.json())
            .then(data => {
                data.forEach(obj => {
                    if (obj._id === orderId) {
                        setUserInfo(obj);
                    }
                });
            });

        fetchMeals();

    }, []);

    const fetchMeals = () => {
        fetch(MEAL_API_URL)
            .then(res => res.json())
            .then(data => {
                makeMealDataForWeek(data);
            });
    }

    const [mealData, setMealData] = useState([]);

    const [testingText, setTestingText] = useState("Testing Text");
    const [noOfDishes, setNoOfDishes] = useState(noOfDishesFromDB);
    const [enableDishesComp, setEnableDishesComp] = useState(false);

    const makeMealDataForWeek = (mealData) => {
        let weekData = [];
        let today = new Date();
        for (let i = 0; i < 7; i++) {
            let date = new Date(today.setDate(today.getDate() - today.getDay() + i + 1));
            weekData[i] = { date: date.toLocaleDateString() };

            let dateMeal = mealData.filter(meal => meal.date === date.toLocaleDateString());
            if (dateMeal.length > 0 && dateMeal[0].dishes.length > 0) {
                weekData[i].dishes = dateMeal[0].dishes;
                weekData[i].dishesSelected = true;
            } else {
                if (date.getDate() < new Date().getDate()) {
                    weekData[i].date = -1;
                }
                weekData[i].dishes = [];
                weekData[i].dishesSelected = false;
            }

            let day = new Intl.DateTimeFormat("en-US", options).format(date);
            weekData[i].dayText = date.getDate() + " " + day;

            let color = "black";
            if (weekData[i].date === -1) {
                color = "red";
            } else if (weekData[i].dishes.length === 0) {
                color = "green";
            } else {
                color = "grey";
            }
            weekData[i].color = color;
            weekData[i].id = i;

        }
        setAllMealData(weekData);       
    }

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

            let data;// = dishData[i];
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
                //               console.log(data);
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

        let newMeal = {
            date: data.date,
            dishes: data.dishes,
            customerId: userInfo.user._id,
            customerName: userInfo.user.name,
            kitchenId: userInfo.plan.user,
            kitchenName: userInfo.plan.username,
            planId: userInfo.plan._id,
            planName: userInfo.plan.name
        };

        postMeal(newMeal);

        let mealData = allMealData;
        mealData.map(meal => {
            if(meal.date === newMeal.date){
                meal.dishes = newMeal.dishes;
                meal.color = "grey";
                meal.dishesSelected = true;
            }
        });

        setAllMealData(mealData);
    };

    return (
        <div>
            {allMealData.map(meal => <WeekButton data={meal} color={meal.color} key={meal.id} text={meal.dayText} onClick={onWeekButtonClick} />)}
            {/* {makeWeekCal()} */}
            <div className="container">
                <br></br>
                <br></br>
                {enableDishesComp && <SelectDishes data={mealData} kitchenId={userInfo.plan.user} noOfDishes={noOfDishes} onClickSave={onSaveButtonClick} />}
                <br></br>
            </div>
        </div>
    )
}

export default WeekCalender