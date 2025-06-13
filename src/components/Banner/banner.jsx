import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css';
import { useLocation } from "react-router-dom";

const Banner = () => {
    const location = useLocation();
    const showBanner = location.pathname === "/" 

    if (!showBanner) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                <div>
                    <img src="/img/banner1.jpg" alt="Banner 1" />
                </div>
                <div>
                    <img src="/img/banner2.jpg" alt="Banner 2" />
                </div>
                <div>
                    <img src="/img/banner3.jpg" alt="Banner 3" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;