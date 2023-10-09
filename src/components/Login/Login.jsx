import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/Firebase-config";
import { useRef, useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const [registerError, setregisterError] = useState();
    const [success, setSucess] = useState();
    const emailRef = useRef(null)

    const handellogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setregisterError('');
        setSucess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSucess("User create SuccessFully")
            })
            .catch(error => {
                setregisterError(error.message)
            })
    }

    const handelForgrtPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('place privide an email', emailRef.current.value);
            return
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('place write a valid email')
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("place chack your email")
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="bg-white">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-400 text-white">
                        <form onSubmit={handellogin} className="p-5">
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="text"
                                    placeholder="email"
                                    name="email"
                                    ref={emailRef}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="py-2 px-2" >
                                    <a onClick={handelForgrtPassword} className="hover:underline" href="#">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-700 text-center text-xl">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-700 text-center text-xl">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;