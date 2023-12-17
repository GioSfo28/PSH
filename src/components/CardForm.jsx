import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";


function CardForm() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imgURL: "",
        isVisited: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const city = {
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            imgURL: formData.imgURL,
            isVisited: formData.isVisited,
        };
        setFormData({
            name: "",
            description: "",
            imgURL: "",
            isVisited: false,
        });
        dispatch(add(city));
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 p-8 rounded-lg bg-zinc-800">
            <div className="flex flex-col">
                <label className="text-white">Nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white">Descrizione</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col">
                <label className="text-white">Immagine</label>
                <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white">Visitata?</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}></input>
            </div>
            <button className="text-white bg-zinc-950" type="submit">Aggiungi Card</button>
        </form>
    );
}

export default CardForm