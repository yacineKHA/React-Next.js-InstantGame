import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Navbar = () => {

    const [color, setColor] = useState(false);
    const[toggle, setToggle] = useState(false)

    useEffect(() => {
        scrollNavbar()
    }, []);

    function handleHamburger(){
        setToggle(true)
    }

    function scrollNavbar(){
        //changer la couleur navbar au scroll
        const changeColor = ()=>{
            if (window.scrollY >= 90){
                setColor(true)
            } else{
                setColor(false)
            }
        }
        window.addEventListener('scroll', changeColor)
    }

    let content

    content =
        <div className="bg-red-500">
            <h1>C'est bon</h1>
        </div>


    return (
        <div className= {color? "bg-black w-full p-4 flex items-center justify-between fixed top-0 z-50": "bg-gradient-to-b from-black w-full p-4 flex items-center justify-between fixed top-0 z-50"}>
            <Link href="/">
                <div className="flex items-center justify-center text-orange-600 font-bold text-center hover:cursor-pointer relative">
                    <div>
                        <h1 className="text-sm pb-0 mb-0 uppercase">Instant</h1>
                        <h1 className=" text-4xl pt-0 mt-0 uppercase">Game</h1>
                    </div>
                </div>
            </Link>
            <div className="flex">
                <Link href="/produits"><a className="p-3">Produits</a></Link>
                <Link href="/login"><a className="p-3 flex">Se connecter</a></Link>
            </div>
            <div>
                <svg onClick={handleHamburger} xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"/>
                </svg>
            </div>

        </div>
    );
};

export default Navbar;
