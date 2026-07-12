import { useForm } from "react-hook-form";
import { useState } from "react";

const formGroupStyles = "flex flex-col gap-1 mb-4";
const buttonStyles =
  "py-2 px-4 mb-2 bg-accent rounded-md text-text font-semibold cursor-pointer active:scale-95 shadow-lg transition-all duration-300 hover:translate-y-[-2px]";
const labelStyles = "text-text text-lg font-semibold tracking-wider";
const inputStyles =
  "border-2 text-text border-border rounded-md py-1 px-2 outline-none transition-colors duration-300 focus:ring-2 focus:ring-accent";

const Auth = () => {
  const [mode, setMode] = useState("signup");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-surface rounded-xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-text mb-4">
          {mode === "signup" ? "Sign Up" : "Login"}
        </h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* Email Section */}
          <div className={formGroupStyles}>
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            <input
              className={inputStyles}
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email here..."
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          {/* Password Section */}
          <div className={formGroupStyles}>
            <label htmlFor="password" className={labelStyles}>
              Password
            </label>
            <input
              className={inputStyles}
              {...register("password", {
                required: "password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          {/* Number Section */}
          {mode === "signup" && (
            <div className={`${formGroupStyles}`}>
              <label className={labelStyles} htmlFor="number">
                Mobile Number
              </label>
              <input
                className={inputStyles}
                type="tel"
                id="number"
                placeholder="077-7777-7777"
                {...register("number", {
                  required: mode === "signup" ? "Enter a valid number" : false,
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Enter a valid mobile number",
                  },
                })}
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>
          )}

          {/* signup button */}
          <button className={buttonStyles} type="submit">
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
          {mode === "signup" ? (
            <p className="text-text">
              Already have an account?
              <button
                type="button"
                onClick={() => {
                  reset();
                  setMode("login");
                }}
                className="text-accent font-semibold ml-1 underline cursor-pointer"
              >
                Login
              </button>
            </p>
          ) : (
            <p className="text-text">
              Don't have an account?
              <button
                type="button"
                onClick={() => {
                  reset();
                  setMode("signup");
                }}
                className="text-accent font-semibold ml-1 underline cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
