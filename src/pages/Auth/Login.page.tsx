import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import { FaSpinner, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AuthFooter from "../../components/AuthFooter";
import { userLoginAction } from "../../actions/auth.actions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { authErrorSelector } from "../../selectors/auth.selectors";

interface Props {}

const Login: FC<Props> = () => {
  const dispatch = useDispatch();
  const error = useAppSelector(authErrorSelector);
  if(error){
    console.log("erroro", error);
    alert(error);
  }
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
      dispatch(userLoginAction(data));
      setSubmitting(false);
    },
  });
  
  return (
    <div className="mx-auto font-nunito mt-5 md:mt-20 max-w-lg">
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
          <Input
            PlaceHolder="Email Address"
            id="email"
            type="email"
            Icon={FiUser}
            required
            autoComplete="email"
            touched={touched.email}
            error={errors.email}
            errorBorder={touched.email && errors.email ? "border-red-400" : ""}
            {...getFieldProps("email")}
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
            errorBorder={
              touched.password && errors.password ? "border-red-400" : ""
            }
            {...getFieldProps("password")}
          />

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
                  "px-5 opacity-50 " +
                  (!touched.email || !touched.password || errors.email || errors.password
                    ? "cursor-not-allowed "
                    : "opacity-100 cursor-pointer")
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
