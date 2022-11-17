
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthUserContext } from '../../Context/UserContext/UserContext';

const Register = () => {


    // taking values from User Context.
    const { signUpByEmail, setUserNameAndPhoto, setLoader, signUpByGoogle, signUpByGitHub } = useContext(AuthUserContext);





    // Getting location system.
    const location = useLocation();

    // Getting Location.
    const from = location.state?.from?.pathname || '/';










    // calling navigate hook
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {


        // Stop Loading on submit 
        event.preventDefault();

        // full form
        const form = event.target;



        // Form Values Start
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photo = form.photo.value;
        // Form Values End



        // Sign up with user email and password.
        signUpByEmail(email, password)
            .then(result => {
                setLoader(false);

                // set user photo and name after sign up. 
                setUserNameAndPhoto(photo, name)
                    .then(() => {
                        form.reset();
                        alert("Please Check your Email!");

                        // sendEmailVerification()
                      
                        setLoader(true);
                    })
                    .catch(error => alert(error.message));
            })
            .catch(error => alert(error.message));





    }

    // sign up by google start
    const signUpByGoogleHandler = () => {
        signUpByGoogle()
            .then(() => {
                navigateNow();
            })
            .catch(error => alert(error.message))
    }
    // sign up by google End





    // sign up by google start
    const signUpByGitHubHandler = () => {
        signUpByGitHub()
            .then(() => {
                navigateNow();
            })
            .catch(error => console.log(error))
    }
    // sign up by google End




    // setup navigator After Register.
    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }






    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Have Patience! Work Hard! YOu will surprise yourself, and eventually, you will be proud of yourself.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="link" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className='card-body'>

                        <p className='mb-2'>already have an account? <Link className='text-blue-400 hover:text-blue-600' to='/login'>Login</Link></p>


                        <button onClick={signUpByGoogleHandler} className='btn btn-outline'><FaGoogle className='mr-2' /> Sign UP with google</button>
                        <button onClick={signUpByGitHubHandler} className='btn btn-outline' ><FaGithub className='mr-2' /> Sign Up with gitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;