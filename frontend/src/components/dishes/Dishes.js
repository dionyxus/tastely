import Dish from "./Dish";

const Dishes = ({dishes, onDelete}) => {

  return (
    <div>
        {dishes.map((dish) => (
            <Dish key={dish.id} dish={dish} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default Dishes