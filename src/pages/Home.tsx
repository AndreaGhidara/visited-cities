
import { useState } from 'react';
import Card from '../components/LittleComponents/Card';
import AddCity from '../components/AddCity';
import { city } from '../types/card-type';

function Home() {

    const [cities, setCities] = useState<city[]>([
        {
            id: 0,
            name: "Roma",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:"Descrizione",
            isVisited:true
        },
        {
            id: 1,
            name: "Amsterdam",
            image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:"Descrizione",
            isVisited:false
        },
        {
            id: 3,
            name: "Berlino",
            image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:"Descrizione",
            isVisited:true
        },
    ])

    const addCity = (city:city) => {
        setCities([...cities,city])
    }

    return (
        <div>
            <div className='flex justify-end'>
                <AddCity addCity={addCity}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities.map((value, key) => (
                    <div key={key}>
                        <Card
                            id={value.id}
                            name={value.name}
                            image={value.image}
                            description={value.description}
                            isVisited={value.isVisited}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home