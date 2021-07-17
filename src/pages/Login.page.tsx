import React, { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import { FaSpinner, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthFooter from "../components/AuthFooter";

interface Props {}

const Login: FC<Props> = () => {
  const history = useHistory();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {
    handleSubmit,
    touched,
    isSubmitting,
    setSubmitting,
    errors,
    getFieldProps,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      setSubmitting(true);
      setTimeout(() => {
        console.log(data);
        history.push("/dashboard");
      }, 3000);
    },
  });

  return (
    <div className="mx-auto font-nunito mt-20 max-w-lg">
      <h1 className="text-4xl tracking-wider text-black font-medium mb-5">
        Log In to <span className="text-blue-600 font-semibold">CORK</span>
      </h1>
      <p className=" font-bold">
        New here?{" "}
        <Link
          to="/signup"
          className="text-blue-600 border-b-2 border-solid border-blue-600"
        >
          Create an account
        </Link>
      </p>
      <form className="text-left mt-12" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true"></input>
        <div className="">
          <div className="border-b-2 border-solid border-gray-200 w-96 flex items-center">
            <FiUser className="w-6 h-6 text-blue-400 inline" />
            <Input
              PlaceHolder="Email Address"
              id="email"
              type="email"
              required
              autoComplete="email"
              {...getFieldProps("email")}
            />
          </div>
          <div className="text-red-500 h-6">
            {touched.email && errors.email}
          </div>

          <div className="border-b-2 border-solid border-gray-200 w-96 mt-5 flex items-center focus:border-blue-600">
            <FiLock className="w-6 h-6 text-blue-400 inline" />
            <Input
              PlaceHolder="Password"
              id="password"
              type={passwordHidden ? "password" : "text"}
              required
              autoComplete="current-password"
              {...getFieldProps("password")}
            />
          </div>
          <div className="text-red-500 h-6">
            {touched.password && errors.password}
          </div>

          <div className="flex justify-between mt-5">
            <div className="">
              <p className="inline-block">Show Password </p>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  id="toggle"
                  className="hidden"
                  onClick={() => {
                    setPasswordHidden((open) => !open);
                  }}
                />
                {passwordHidden ? (
                  <FaToggleOff className="w-7 h-7 text-blue-600 inline-block ml-2" />
                ) : (
                  <FaToggleOn className="w-7 h-7 text-blue-600 inline-block ml-2" />
                )}
              </label>
            </div>
            <div className="flex items-center">
              {isSubmitting && <FaSpinner className="h-5 w-5 animate-spin" />}
              <Button
                type="submit"
                className={
                  "opacity-50 " +
                  (!touched.email || errors.email || errors.password
                    ? ""
                    : "opacity-100")
                }
              >
                Log In
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-gray-500 font-normal">
              <label className="">
                <input
                  type="checkbox"
                  className="text-blue-400 border-2 w-5 h-5"
                />
                <span className="px-2"></span>Keep me logged in
              </label>
            </div>
          </div>

          <div className="text-center pt-5">
            <Link
              to="forgotPassword"
              className="text-blue-600 font-bold tracking-wider"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>

      <AuthFooter />
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
