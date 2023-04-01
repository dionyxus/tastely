import Button from "./Button";

const Dish = ({ dish, onDelete }) => {
  return (
    <div className="dishlist-card">

      <div className="dishlist-card-head">
        <div className="dishlist-card-head-image-title">
          <img src={dish.imageurl} alt="DishImage" height="70px" />
          <h3>  {dish.name}  </h3>
        </div>
        <Button onClick={() => onDelete(dish.id)} text="Delete" color="red" />
      </div>

      <p>{dish.description}</p>
    </div>
  )
}

export default Dish