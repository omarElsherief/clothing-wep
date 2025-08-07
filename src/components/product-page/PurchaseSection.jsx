import { Heart } from "lucide-react";
import { useState } from "react";
import CartBtn from "../shared/CartBtn";

function PurchaseSection({product, maxQuantity = 1 }) {
    
    const [quantity, setQuantity] = useState(1);
    
    function increaseQuantity() {
        setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
    }
    function decreaseQuantity() {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    }
    
    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-5">
            <div className="bg-[#F5F5F5] flex items-center justify-between px-4 py-2
            rounded-md">
                <button onClick={decreaseQuantity} className="cursor-pointer">-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} className="cursor-pointer">+</button>
            </div>
            <div className="cursor-pointer  border-black border-2 px-4 py-2 rounded-md flex justify-center gap-2 ">
                <span><Heart /></span>
                <span>wishlist</span>
            </div>
            <div className="col-span-2" onClick={() => setQuantity(1)}>
                <CartBtn product={product} quantity={quantity}/>
            </div> 
        </div>
    );
}

export default PurchaseSection;