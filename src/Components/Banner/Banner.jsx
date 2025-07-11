import cox from '../../assets/Rectangle 1.png';
import sreemon from '../../assets/Sreemongol.png';
import sundor from '../../assets/sundorbon.png';
// import { FaChevronCircleLeft } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { FaChevronCircleRight } from "react-icons/fa";
const Banner = () => {
    return (

        <div>
            <label className="swap">
                <input type="checkbox" />
                <div className="swap-on"> <img src={sundor} alt="" /></div>
                <img src={cox} alt="" />                                
                <div className="swap-off"> <img src={sreemon} alt="" /></div>                
            </label>
        </div>
    );
};

export default Banner;