import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";
const Register = () => {

  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname ||"/";
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
    const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password
    }
   await axios.post("http://localhost:4001/user/register",userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Resistered successfully");
        navigate(from,{replace:true});

      }localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
         console.log(err);
      toast.error("Error:"+err.response.data.message);
      }
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <dialog id="register_modal" className="modal" open>
        <div className="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 "
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Register</h3>

            <div className="mt-4">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                 {...register("fullname", { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-0"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

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

            <div className="flex justify-between items-center">
              <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-600">
                SignUp
              </button>

              <p className="mt-6">
                Have Account?{" "}
                <button
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="text-blue-500"
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Register;
