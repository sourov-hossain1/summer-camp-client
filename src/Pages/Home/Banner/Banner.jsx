// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
// import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[420px] res-ban">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uLle4q3aS0CQBtEqchxqrHfDRu46ocCJZQ&usqp=CAU" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR1-Du1nbX8XrI1BfJSP4k47rvSMA6F7GWw&usqp=CAU" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzMsMKLuVxVMbKGnZUwI43TDCjQFCa3eIbg&usqp=CAU" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkGFTbiYWVaAObBGKGvpehV3hDmvAOo4wkA&usqp=CAU" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>

    );
};

export default Banner;