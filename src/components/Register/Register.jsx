import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/Firebase-config";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/Ai';

const Register = () => {
    const auth = getAuth(app);
    const [registerError, setregisterError] = useState();
    const [success, setSucess] = useState()
    const [showPassword, setShowPassword] = useState(false)

    const handelRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.terms.checked;

        if (password.length < 6) {
            setregisterError("Firebase: Password should be at least 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setregisterError("Your Password should have at list on upper case charecters")
            return
        }
        else if(!checkbox){
            setregisterError('Place accept our terms and conditions')
            return
        }

        setregisterError('');
        setSucess('');
        setShowPassword('')

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSucess("User create SuccessFully")
            })
            .catch(error => {
                setregisterError(error.message)
            })
    }



    return (
        <div className="max-w-xl mx-auto h-screen items-center mt-20 ">
            <form onSubmit={handelRegister} className="border-2 p-5" >
                <h1 className="text-4xl mb-10 text-center">Place Register</h1>
                <input className="my-2 py-3 px-4 w-full  bg-gray-800 text-white"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required /> <br />
                <div className=" flex cursor-pointer relative">
                    <input className="my-2 py-3 px-4 w-full  bg-gray-800 text-white"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required />
                    <span className=" text-amber-400 absolute top-6 right-4  " onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                        }
                    </span>
                </div>
                <br />
                <div>
                    <input className="" type="checkbox" name="terms" id="terms" />
                    <label className="text-base" htmlFor="terms"> Accept our terms and Conditions</label>
                </div>
                <br />
                <input className="my-3 py-3 px-4 w-full  bg-pink-500 text-xl cursor-pointer rounded-xl" type="submit" value="submit" />
            </form>
            {
                registerError && <p className="text-red-700 text-center text-xl">{registerError}</p>
            }
            {
                success && <p className="text-green-700 text-center text-xl">{success}</p>
            }
        </div>
    );
};

export default Register;