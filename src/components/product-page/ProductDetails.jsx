import PurchaseSection from "./PurchaseSection";
import Rating from "./Rating";

function ProductDetails({ product }) {

    return (
        <>
            <div className="flex flex-col gap-5 min-w-[300px]">
                <Rating className="" rating={product.rating} reviewCount={product.reviews.length} />
                <h1 className="font-bold text-3xl ">{product.title}</h1>
                <p className="text-[#6C7275]  mt-5">{product.description}</p>
                <p className="font-bold text-2xl"><span>&#36;</span>{product.price}</p>
                <p
                    className={
                        product.availabilityStatus === "In Stock"
                            ? "text-green-500 font-bold"
                            : product.availabilityStatus === "Out of Stock"
                            ? "text-red-500 font-bold"
                            : "text-yellow-500 font-bold"
                    }
                >
                    {product.availabilityStatus}
                </p>
                <PurchaseSection maxQuantity={product.stock} product={product} />
                <div>
                    <p className="text-[#6C7275]">SKU: <span className="text-black">{product.sku}</span></p>
                    <p className="text-[#6C7275]">Category: <span className="text-black">{product.category}</span></p>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;