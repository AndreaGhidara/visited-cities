import { useState } from "react";
import { card } from "../../types/card-type";

import { motion } from "framer-motion";

function Card({ id, name, image }: card) {

    const [visited, setVisited] = useState(false);

    const changeVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="max-h-[250px] h-[200px]">
                <img className="w-full h-full object-cover" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="truncate">If a dog chews shoes whose shoes does he choose? {id}</p>
                <div className="flex justify-between">
                    {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visitata</button>
                        </div> */}
                    <div className="flex items-center">
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            {visited ? "Visitata ✔️" : "Da visitare ❌"}
                        </motion.p >
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={changeVisited} className="btn btn-secondary">{visited ? "Da visitare" : "Visitato"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card