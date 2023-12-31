import { useState } from "react";
import { city } from "../../types/card-type";

import { motion } from "framer-motion";

function Card({ id, name, image, description, isVisited }: city) {

    const [visited, setVisited] = useState(isVisited);

    const changeVisited = () => {
        setVisited(!visited)
    }

    const imageNotFound = (e:React.ChangeEvent<HTMLImageElement>) => {
        e.target.src = 'https://www.leliografica.net/upload/870_541/nullcms.png';

    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="max-h-[250px] h-[200px]">
                <img onError={imageNotFound} className="w-full h-full object-cover" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="truncate">{description} {id}</p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <motion.p
                            key={ visited ? 1 : 2 }
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