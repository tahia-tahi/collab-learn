
import logo from '../assets/collab-logo.png'
import { Link } from 'react-router';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";



const Navbar = () => {


    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'assignments'}>Assignments</Link>

                {
                    user ? <>
                        <Link to={'/pending'}>Pending Assignments</Link>
                        <Link to={'/create'}>Create Assignment</Link>
                        <Link to={'/submitted'}>Submitted Assignments</Link>
                        <button>Log Out</button>

                    </> : <>
                        <Link to={'/auth/login'}>Log In</Link>
                        <Link to={'/auth/signup'}>Sign Up</Link>

                    </>
                }


            </div>

            <div>
                <IoIosSunny />
                <FaMoon />


            </div>
        </div>
    );
};

export default Navbar;