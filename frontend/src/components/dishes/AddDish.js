import { useState, useRef } from "react";
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { initializeApp } from "firebase/app";


const AddDish = ({ onAddDish }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [veg, setVeg] = useState(false);
    const [imageInput, setImageInput] = useState();
    const imageInputRef = useRef();

    const firebaseConfig = {
        apiKey: "AIzaSyDeWXGiRoc2XjY_mEg-Xt0HsuIOBssJOIU",
        authDomain: "tastely-5fd54.firebaseapp.com",
        projectId: "tastely-5fd54",
        storageBucket: "tastely-5fd54.appspot.com",
        messagingSenderId: "259493791650",
        appId: "1:259493791650:web:ec39e0d2a15cb215c9d4fb"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please add dish Name");
            return;
        }

        let storageRef = ref(storage, `Dishes/${imageInput.name}`);

        uploadBytes(storageRef, imageInput).then((snapshot) => {
            console.log('Uploaded image!');

            getDownloadURL(storageRef)
                .then((url) => {
                    onAddDish({ name: name, description: desc, veg: veg, imageurl: url });
                    setName("");
                    setDesc("");
                    setVeg(false);
                    setImageInput(null);
                    imageInputRef.current.value = "";
                })
        });


    }

    const handleImageChange = (e) => {
        setImageInput(e.target.files[0]);
    };

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

            <div className="form-control">
                <label>Dish Image</label>
                <input style={{ all: "unset" }}
                    type="file"
                    name="dishimage"
                    ref={imageInputRef}
                    onChange={handleImageChange} ></input>
            </div>

            <input type="submit" value="Save Dish" className="btn btn-block" />
        </form>
    )
}

export default AddDish