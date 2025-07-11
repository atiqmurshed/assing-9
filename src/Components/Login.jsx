import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase.init";
// import Navbar from "./Navbar/Navbar";


const Login = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);

            })
            .catch(error => {
                console.log('ERROR', error);

            })
    }
    return (
        <div className="hero bg-slate-200 min-h-screen">
            {/* <div className="mb-96 ">
                <Navbar></Navbar>
            </div> */}
            <div className="hero-content flex-col ">
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleGoogleSignIn} className="card-body">
                         <h1 className="text-2xl font-bold">Login</h1>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="username or Email" className="input input-bordered mt-0" required />
                        </div>
                        <div className="form-control">
                         
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4'>New to this website ? please <Link to='/register'>Register</Link></p>
                    <p>
                        <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
                    </p>
                </div>
                <NavLink className='btn btn-warning' to='/'>Home</NavLink>
            </div>
        </div>
    );
};

export default Login;