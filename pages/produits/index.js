import React, {useState} from 'react';
import Card from "../../components/Card";
import styles from "/pages/produits/Produits.module.css"
import Image from "next/image";


const Products = () => {




    return (
        <div className="flex flex-col items-center bg-blue-400">
            <div className={styles.designBox} >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>

            </div>
            <div className="grid grid-cols-2 relative">
                <Card/>
            </div>
        </div>

    );
};

export default Products;




