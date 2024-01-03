import React from "react";




function CarouselItem({item}) {

    return (
            <div className="inline-flex place-items-center justify-center h-[490px] bg-white">
                <h2 className="text-black">{item.domanda}</h2>
            </div>
    );
}

export default CarouselItem;