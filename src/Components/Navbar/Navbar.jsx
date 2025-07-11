import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
const Navbar = () => {
    return (
    
             <div className="flex text-black  bg-transparent gap-10 py-5 text-center justify-center mx-auto ">
                {/* <ul className="menu menu-horizontal w-full px-1"> */}
                    <img className='w-20 bg-slate-400 rounded-md' src={logo} alt="" />
                    <input type="text" placeholder="Search your Destination" className="input input-bordered w-full max-w-xs" />
                    <NavLink className='py-2'>News</NavLink>
                    <NavLink className='py-2'>Destination</NavLink>
                    <NavLink className='py-2'>Blog</NavLink>
                    <NavLink className='py-2'>Contacts</NavLink>
                    <button className='btn btn-warning'><NavLink to='login'>Login</NavLink></button>     
            </div>
        
    );
};

export default Navbar;