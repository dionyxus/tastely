import Dish from "./Dish";

const Dishes = ({dishes, onDelete}) => {

  return (
    <>
        {dishes.map((dish) => (
            <Dish key={dish.id} dish={dish} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Dishes