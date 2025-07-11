import Navbar from "../Navbar/Navbar";
import log from '../../assets/Rectangle 1.png'
import { FaArrowRight } from "react-icons/fa6";
// import { FaChevronCircleLeft } from "react-icons/fa";
// import { FaChevronCircleRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${log})`,
      }}
    >
      <div className=" bg-black/60 min-h-screen">
        <Navbar />
        <div className="flex">
          <div className="gap-4 ml-24 mt-20">
            <h1 className="text-5xl font-semibold mb-2 text-white">COX'S BAZAR</h1>
            <p className="w-[450px] h-[80px] text-gray-300">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className="btn btn-warning mt-12">Booking <FaArrowRight /></button>
          </div>
<Outlet></Outlet>
          <div className="flex ml-56 mt-80">
            <Banner></Banner>
            {/* <NavLink><FaChevronCircleLeft className="text-white text-3xl" /></NavLink>
            <NavLink><FaChevronCircleRight className="text-white text-3xl" /></NavLink> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;