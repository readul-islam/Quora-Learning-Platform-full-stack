import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFormik } from "formik";

import { Link, useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
// import {
//   useSignInWithEmailAndPassword,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const { email, password } = values;
      await signInWithEmailAndPassword(email, password);
      console.log(values);
    },
  });
  // if (error) {
  //   toast.error(error.message, { id: 1 });
  // }
  // if (gError) {
  //   toast.error(gError.message, { id: 1 });
  // }
  // if (user || gUser) {
  //   toast.success("Login Successfully", { id: 1 });
  //   navigate("/home");
  // }
  return (
    <>
      <div
        style={{
          "backgroundImage": "url(https://wallpapercave.com/wp/wp9764093.jpg)",
        }}
        className="hero min-h-screen  "
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:px-8 px-0 text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6  text-2xl font-semibold ">
              Online Learning Now In Your Fingertips
            </p>
            <p className="  text-xl  ">
              Quora is a online learning platform that offers various premium
              courses for your skill development
            </p>
          </div>
          <div className=" flex-shrink-0 w-full xl:max-w-lg max-w-md">
            <div className="p-4  bg-white  border border-gray-200 rounded-lg shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our Quora
                </h5>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...formik.getFieldProps("password")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        name="remember"
                        {...formik.getFieldProps("remember")}
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                >
                  Sign in{" "}
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                    to="/register"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn w-full btn-outline mb-4"
              >
                <span className="pr-4">
                  <FcGoogle size={30} />
                </span>
                <span> continue with google</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
