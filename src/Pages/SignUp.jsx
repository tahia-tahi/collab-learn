import { useContext, useState } from 'react';
import ShowHidePassword from '../Components/ShowHidePassword';
import { AuthContext } from '../Provider/AuthContext';
import GoogleSignIn from '../Components/GoogleSignIn';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SignUp = () => {

    const { createUser, setUser, updateUser } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;




    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const name = formData.get('name')
        const photo = formData.get('photo')

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries())
        console.log(restFormData);


        if (passwordRegex.test(password) === false) {
            setPasswordError('Password must have an uppercase letter, a Lowercase letter,least 6 character')
            return
        }


        createUser(email, password)
            .then(result => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })

                        toast.success('Sign Up Successfull')

                        navigate('/')

                    })
                    .catch((error) => {
                        toast.error(error.message)
                    })
            })
            .catch((error) => {
                console.log(error.message);
            })

    }
    return (




        <div>

            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Sign Up now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />



                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <ShowHidePassword></ShowHidePassword>


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Sign Up</button>
                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>

                    {
                        passwordError && <p className='text-xs text-error'>{passwordError}</p>
                    }

                </form>
            </div>


        </div>
    );
};

export default SignUp;