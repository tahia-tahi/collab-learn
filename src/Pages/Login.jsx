import ShowHidePassword from '../Components/ShowHidePassword';
import GoogleSignIn from '../Components/GoogleSignIn';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
    const handleLogIn = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const email = formData.get('email')
        const password = formData.get('password')

        signIn(email, password)
            .then((result) => {
                const user = result.user
                toast.success('Log In Successful',user)
                navigate(`${location.state? location.state: ('/')}`)

            })
            .catch((error) => {
                console.log(error.message);

            })
    }


    return (
        <div>

            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-20">
                <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <ShowHidePassword></ShowHidePassword>



                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Login</button>

                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>
                        <p className='mt-3'>Don't have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/signup'}>Sign Up</Link></p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Login;