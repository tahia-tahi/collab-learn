import ShowHidePassword from '../Components/ShowHidePassword';

const SignUp = () => {

      const handleRegister = (e) =>{
        e.preventDefault()

        const form = e.target;
        const formData = 

      }
    return (

      


        <div>

            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Register now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />



                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <ShowHidePassword></ShowHidePassword>


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Register</button>
                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>

                </form>
            </div>


        </div>
    );
};

export default SignUp;