import { useFormik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_UP_INITIAL_VALUES } from "../constants";
import { SIGN_IN_FORM_VALIDATE_SCHEMA } from "../schema";
import { registerApi } from "../api/auth";
import { logIn } from "../../../store/authenticationSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // register handler
  const submitHandler = async (values) => {
    try {
      const { email, password } = values;
      const res = await registerApi({ email, password });
      console.log(res);
      const payload = {
        token: res?.data?.token,
        userInfo: { userId: res?.data?.user?._id, email: res?.data?.user?.email },
      };
      dispatch(logIn(payload));
      navigate("/", { replace: true });
    } catch (error) {
      alert(err?.response?.data);
    }
  };

  const formik = useFormik({
    initialValues: SIGN_UP_INITIAL_VALUES,
    validationSchema: SIGN_IN_FORM_VALIDATE_SCHEMA,
    onSubmit: submitHandler,
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp9764093.jpg)",
        }}
        className="hero min-h-screen  "
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:px-8 px-0 text-white">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Registration in to our Quora
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
                  {formik.touched.email && formik.errors.email ? (
                    <small className="text-xs text-red-600 font-semibold">
                      {formik.errors.email}
                    </small>
                  ) : null}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    password
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
                  {formik.touched.password && formik.errors.password ? (
                    <small className="text-xs text-red-600 font-semibold">
                      {formik.errors.password}
                    </small>
                  ) : null}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    {...formik.getFieldProps("confirmPassword")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <small className="text-xs text-red-600 font-semibold">
                      {formik.errors.confirmPassword}
                    </small>
                  ) : null}
                </div>
                <div className="flex items-start cursor-pointer">
                  <div className="flex items-start  ">
                    <div className="flex items-center  h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        name="acceptCondition"
                        {...formik.getFieldProps("acceptCondition")}
                        className="w-4 h-4 bg-gray-50 rounded border  border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      className="ml-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </div>
                {formik.touched.acceptCondition &&
                formik.errors.acceptCondition ? (
                  <small className="text-xs text-red-600 m-0 font-semibold">
                    {formik.errors.acceptCondition}
                  </small>
                ) : null}
                <button
                  type="submit"
                  className={`w-full bg-blue-700 hover:bg-blue-800  text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase`}
                >
                  Register{" "}
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Login Now
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
                <span className=" text-xs md:text-sm ">
                  {" "}
                  continue with google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
