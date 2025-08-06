import { UserRound } from "lucide-react";
import Rating from "./Rating";

function Reviews({ product }) {
    
    
return (
    <>
        <div>
        </div>
        <div className="flex flex-col gap-5 mt-10 md:col-span-2"> 
            <h1 className="font-semibold text-xl">Customer Reviews</h1>
            <Rating className="" rating={product.rating} reviewCount={product.reviews.length} />
            <h1 className="font-semibold text-xl">{product.reviews.length} Reviews</h1>
            
                {product.reviews.map((review, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-1 border-b-1 border-gray-300 pb-4">
                            <UserRound className="bg-[#F3F5F7] p-1 rounded-4xl w-10 h-10" />
                            <h1 className=" font-semibold">{review.reviewerName}</h1>
                            <Rating rating={review.rating} reviewCount={0} />
                            <p className="">{review.comment}</p>
                        </div>
                    );
                })}
        </div>
    </>
);
}

export default Reviews;