const Auth = () => {
  const groupDataStyles = "flex flex-col gap-1 mb-4";
  const buttonStyles =
    "py-2 px-4 mb-2 bg-accent rounded-md text-text font-semibold cursor-pointer active:scale-95 shadow-lg transition-all duration-300 hover:translate-y-[-2px]";
  const labelStyles = "text-text text-lg font-semibold tracking-wider";
  const inputStyles =
    "border-2 text-text border-border rounded-md py-1 px-2 outline-none transition-colors duration-300 focus:ring-2 focus:ring-accent";
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-surface rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-text mb-4">Sign-up Page</h1>
        <form>
          <div className={groupDataStyles}>
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            <input
              className={inputStyles}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here..."
            />
          </div>
          <div className={groupDataStyles}>
            <label htmlFor="password" className={labelStyles}>
              Password
            </label>
            <input
              className={inputStyles}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button className={buttonStyles} type="submit">
            Sign-up
          </button>
          <p className="text-text">
            Already have an account with us?
            <span className="text-accent font-semibold ml-1 underline cursor-pointer">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
