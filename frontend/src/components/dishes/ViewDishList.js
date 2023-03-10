
const DishRow = ({ dish }) => {
    return (
        <div className="task">
            <h3>{dish.name} </h3>
            <p>{dish.description}</p>
        </div>
    )
}


const ViewDishList = ({ dishes }) => {

    return (
        <>
            {dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
            ))}
        </>
    )
}

export default ViewDishList