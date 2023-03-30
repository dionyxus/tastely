
const DishRow = ({ dish }) => {
    return (
        <div className="dishlist-view-card">

        <div className="dishlist-view-card-head">
            <img src={dish.imageurl} alt="DishImage" height="70px" />
            <div>
                <h3>{dish.name} </h3>
                <p>{dish.description}</p>
            </div>

        </div>
        </div>
    )
}


const ViewDishList = ({ dishes }) => {

    return (
        <div>
            {dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
            ))}
        </div>
    )
}

export default ViewDishList