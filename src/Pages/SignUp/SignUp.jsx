import { Link } from "react-router-dom";
import signUpImage from "../../images/signUp1.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
// import "./SignUp.css";


const SignUp = () => {

    const { user, createUser } = useContext(AuthContext);
    console.log(user);



    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className={`hero  `} style={{ backgroundImage: `url(${signUpImage})`, backgroundSize: "cover" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body bg-orange-500">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-4xl font-bold">Please Sign Up</span>
                            </label>
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <span>Already have an account?
                                    <Link to="/login" className="label-text-alt link link-hover font-bold"> Login Here</Link>
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary bg-gradient-to-r from-orange-500 to-orange-300 text-black font-bold" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;