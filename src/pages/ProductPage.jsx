import ProductDetails from "../components/product-page/ProductDetails";
import Reviews from "../components/product-page/Reviews";
import Slider from "../components/product-page/Slider";
import { Link, useNavigate, useParams } from "react-router";
import { getProductById } from "../API/product";
import { use, useEffect, useState } from "react";


function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductById(id) {
            try {
                const product = await getProductById(id);
                setProduct(product);
            } catch (error) {
                return <div className="text-center mt-10">Error fetching product</div>;
            }
        }
        fetchProductById(id);
    },[id]);
    

    
    if (!product || product.id !== parseInt(id)) {
        return <div className="text-center mt-10 flex flex-col ">Loading...
        <Link to={"/shopping"} className=" underline hover:text-blue-600">
        back to shopping
        </Link>
        </div>;
    }
    
    return (
        <>
            {product ?
                <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto mt-[2rem] gap-20">
                    <Slider images={product.images} />
                    <ProductDetails product={product} />
                    <Reviews product={product} />
                </div>
                : <div className="text-center mt-10">Product not found</div>
            }
        </>
    );
}

export default ProductPage;