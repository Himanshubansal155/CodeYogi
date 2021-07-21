import { useFormik } from "formik";
import { FC, memo } from "react";
import { FaAt, FaSpinner, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { FiLock, FiUser } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import AuthFooter from "../components/AuthFooter";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import * as yup from "yup";
import { useState } from "react";

interface Props {}

const Signup: FC<Props> = () => {
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
    initialValues: { email: "", password: "", phoneNumber: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      phoneNumber: yup.string().required().min(10).max(11),
    }),
    onSubmit: (data) => {
      setSubmitting(true);
      setTimeout(() => {
        console.log(data);
        history.push("/");
      }, 3000);
    },
  });
  return (
    <div className="mx-auto font-nunito mt-5 md:mt-12 max-w-sm">
      <h1 className="text-4xl tracking-wider text-black font-medium mb-5">
        Get started with a free account
      </h1>
      <p className=" font-bold">
        Already have an account? {" "}
        <Link
          to="/"
          className="text-blue-600 border-b-2 border-solid border-blue-600"
        >
          Log in
        </Link>
      </p>
      <form className="text-left mt-12" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true"></input>
        <div className="">
            <Input
              PlaceHolder="Email Address"
              id="email"
              type="email"
              Icon={FiUser}
              required
              autoComplete="email"
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
            />

            <Input
              PlaceHolder="Phone Number"
              id="phone"
              type="tel"
              Icon={FaAt}
              required
              autoComplete=""
              touched={touched.phoneNumber}
              error={errors.phoneNumber}
              {...getFieldProps("phoneNumber")}
            />

            <Input
              PlaceHolder="Password"
              id="password"
              type={passwordHidden ? "password" : "text"}
              Icon={FiLock}
              required
              autoComplete="current-password"
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
            />

          <div className="mt-2">
            <div className="text-gray-500 font-normal">
              <label className="">
                <input
                  type="checkbox"
                  className="text-blue-400 border-2 w-4 h-4"
                />
                <span className="px-1"></span>I agree to the{" "}
                <span className="text-blue-400">terms and conditions</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between mt-5 flex-col md:flex-row space-y-5 md:space-y-0">
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
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </form>

      <AuthFooter />
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
