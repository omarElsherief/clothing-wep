import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";

function CartBtn({ product , quantity = 1 }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogedIn = useSelector((state) => state.auth.isAuthenticated);

    function handleAddToCart() {
        dispatch(addToCart({ ...product, quantity }));
    }
    return (
        <button className="bg-[#e91e63] text-white w-full  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
            onClick={() => {
                isLogedIn ? handleAddToCart() : navigate('/login');
            }
            }>
                    Add to Cart
                </button>
    );
}

export default CartBtn;