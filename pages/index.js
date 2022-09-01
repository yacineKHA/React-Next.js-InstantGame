import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import xbox from '/public/xbox.jpg'
import React, {useEffect, useState} from "react";
import login from "./login";

export default function Home() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetchData()

    }, [])

    function fetchData(){
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response=>
                response.json()
            )
            .then(result=>
                setData(result)
            )
            .catch(error => console.log(error))
    }

    return (
        <div className="bg-darkblack text-white relative">
            <Image src={xbox} priority="true" layout="responsive"
                   alt="xbox"/>
            <div className="mr-10 ml-10 mt-10">
                <h1 className="text-3xl font-bold">Les jeux du moment</h1>
                <div className="flex justify-items-center mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {
                        data.map((data)=>
                            <div className="" key={data.id}>
                                <picture>
                                    <img src={data.url} alt="j" />
                                </picture>
                                <p className="font-bold">{data.title}</p>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    )
}
