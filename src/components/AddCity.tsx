import { useState } from "react";
import { city } from "../types/card-type"


function AddCity({ addCity }:city) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        isVisited: false
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target
        const inputValue = type == "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        })
    }

    const handleSubit = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const city = {
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            image: formData.image,
            isVisited: formData.isVisited
        };
        addCity(city)
    }

    return (
        <div className="mb-4">
            <div className="indicator-item indicator-bottom">
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add City ➕</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <div className="py-4">
                            <div>
                                <form onSubmit={handleSubit} className="flex flex-col items-center">

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Nome della città</span>
                                        </div>
                                        <input name="name" type="text" placeholder="Roma..?" value={formData.name} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label ">
                                            <span className="label-text">Aggiungi url foto</span>
                                            <a target="_blank" href="https://unsplash.com/it/s/foto/torino" className="badge badge-primary hover:badge-outline cursor-pointer">
                                                UnSplash
                                            </a>
                                        </div>
                                        <input name="image" type="text" placeholder={`https://unsplash.com/it/s/foto/${formData.name}`} value={formData.image} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Descrizione</span>
                                        </div>
                                        <textarea onChange={handleInputChange} name="descrizione" className="textarea textarea-bordered">{formData.description}</textarea>
                                    </label>

                                    <label className="cursor-pointer label">
                                        <span className="label-text me-3">Già visitata?</span>
                                        <input checked={formData.isVisited} onChange={handleInputChange} type="checkbox" className="checkbox checkbox-success" />
                                    </label>

                                    <div className="flex items-baseline justify-end w-full pt-3">
                                        <button type="submit" className="btn btn-primary">
                                            Add City
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default AddCity