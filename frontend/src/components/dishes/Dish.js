import Button from "./Button";

const Dish = ({dish, onDelete}) => {
  return (
    <div className="task">
        <h3>{dish.name} <Button onClick={() => onDelete(dish.id)} text="Delete" color="red"/> </h3>
        <p>{dish.description}</p>
    </div>
  )
}

export default Dish