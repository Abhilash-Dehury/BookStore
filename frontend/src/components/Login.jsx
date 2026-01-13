import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button - now a proper button that closes the modal */}
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="w-80 px-3 py-1 border rounded-md outline-0"
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="mt-4">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  className="w-80 px-3 py-1 border rounded-md outline-0"
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-between">
                <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-600 duration-300">
                  Login
                </button>
                <p className="mt-6">
                  Not registered?{" "}
                  <Link to="/register" className="text-blue-500">
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;