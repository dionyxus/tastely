import { useState } from "react";

const AddDish = ({onAddDish}) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [veg, setVeg] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name){
            alert("Please add dish Name");
            return;
        }

        onAddDish({name:name,description:desc,veg:veg});

        setName("");
        setDesc("");
        setVeg(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Dish Name</label>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Add Dish" />
            </div>
            <div className="form-control">
                <label>Dish Description</label>
                <input type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Add Description" />
            </div>
            <div className="form-control form-control-check">
                <label>Is Veg?</label>
                <input type="checkbox"
                    value={veg}
                    checked={veg}
                    onChange={(e) => setVeg(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Dish" className="btn btn-block" />
        </form>
    )
}

export default AddDish