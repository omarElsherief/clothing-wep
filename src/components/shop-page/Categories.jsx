import { useEffect, useState } from "react";
import { getMensProducts , getAllProducts,getWomensProducts ,getByCategory} from "../../API/product";
import Products from "./Products";
import { useNavigate, useParams } from "react-router";


function Category() {
    const navigate = useNavigate();
    const { category:urlCategory } = useParams();
    
    const [category, setCategory] = useState(urlCategory||"all");
    const [products, setProducts] = useState([]);
        
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        navigate(`/categories/${selectedCategory}`);
    }

    useEffect(() => {
        if (category === "mens") {
            fetchMensProducts();
        }else if (category === "womens") {
            fetchWomensProducts();
        }else if (category === "all") {
            fetchAllProducts();
        }else {
            fetchByCategory(category);
        }
    }, [category]);
    async function fetchMensProducts() {
        try {
            const products = await getMensProducts();
            setProducts(products);
        } catch (error) {
            return <p>Error fetching products</p>;
        }
    }
    async function fetchWomensProducts() {
        try {
            const products = await getWomensProducts();
            setProducts(products);
        } catch (error) {
            return <p>Error fetching products</p>;
        }
    }
    async function fetchAllProducts() {
        try {
            const products = await getAllProducts();
            setProducts(products);
        } catch (error) {
            return <p>Error fetching products</p>;
        }
    }
    async function fetchByCategory(category) {
        try {
            const products = await getByCategory(category);
            setProducts(products);
        } catch (error) {
            return <p>Error fetching products</p>;
        }
    }
    return (
        <div className=" flex flex-col items-center justify-center ">
            <select value={category} onChange={handleCategoryChange} className="p-2 border w-[40%] rounded text-center mt-10 mb-10 ">
                <option value="all">All Category</option>
                <option value="mens">Mens</option>
                <option value="mens-shoes">Mens Shoes</option>
                <option value="mens-watches">Mens Watches</option>
                <option value="mens-shirts">Mens Shirts</option>
                <option value="womens-shoes">Womens Shoes</option>
                <option value="womens-bags">Womens Bags</option>
                <option value="womens-dresses">Womens Dresses</option>
                <option value="womens-watches">Women Watches</option>
            </select>
            <Products products={products} />
        </div>
    );
}

export default Category;