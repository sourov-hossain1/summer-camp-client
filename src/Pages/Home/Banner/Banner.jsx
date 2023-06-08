import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div className="banner">
                <img src="https://skillsacademyltd.com/wp-content/uploads/2023/03/ASC-SA-WEBSITE-SLIDER-DESIGN-1.jpeg" />
            </div>
            <div className="banner">
                <img src="https://skillsacademyltd.com/wp-content/uploads/2023/05/SA-WEBSITE-SLIDER-DESIGN-2.jpeg" />
            </div>
            <div className="banner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMByLbW5C6n88tSzEya9wuDxhE1HAgd7H_A&usqp=CAU" />
            </div>
        </Carousel>
    );
};

export default Banner;