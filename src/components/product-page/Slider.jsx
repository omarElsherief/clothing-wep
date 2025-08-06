import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

function Slider({ images }) {
    const [currImage, setCurrImage] = useState(0);

    function rightImage() {
        setCurrImage((prev) => (prev + 1) % images.length);
    }
    
    function leftImage() {
        setCurrImage((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <>
            <div className="relative flex flex-col items-start  min-w-[280px]">
                <div>
                    <img  src={images[currImage]} alt="" className=" bg-[#F3F5F7]" />
                    <button 
                        onClick={leftImage}
                        className=" cursor-pointer absolute left-2 top-2/5">
                        <ArrowLeft />
                    </button>
                    <button 
                        onClick={rightImage}
                        className=" cursor-pointer absolute right-2 top-2/5">
                        <ArrowRight />
                    </button>
                </div>
                <div className="w-[25%] flex mt-4">
                    {
                        images.map((image, index) => {
                            return (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt="" 
                                    className={`cursor-pointer ${currImage === index ? 'border-2 border-b-gray-500' : ''}`}
                                    onClick={() => setCurrImage(index)} 
                                />
                            );    
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Slider;