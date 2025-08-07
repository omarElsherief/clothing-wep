import { useEffect } from 'react';
import Product from '../../pages/ProductPage';
import CartBtn from '../shared/CartBtn';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Products({ products }) {
    const [dotInterval, setDotInterval] = useState("..");
    useEffect(() => {
        const interval = setInterval(() => {
            setDotInterval(prev => prev === ".." ? "..." : "..");
        }, 300);
        return () => clearInterval(interval);
    })

    return (
        <div className="flex items-start justify-center flex-wrap gap-4">
            {
            products.length?
            products.map((product) => {
                return (
                    <div key={product.id} className=" w-[300px] h-[400px] p-4  rounded shadow  hover:shadow-lg transition ">
                        <Link to={`/product/${product.id}`} className="block">
                        <img src={product.thumbnail} alt={product.name} className="cursor-pointer w-full h-48 object-cover mb-2" />
                        </Link>
                    <h3 className="text-lg font-semibold h-20">{product.title}</h3>
                        <CartBtn product={product}/>
                </div>
                    );
            }):
                    <p>loading{dotInterval}</p>
            }
        </div>
    );
}

export default Products;