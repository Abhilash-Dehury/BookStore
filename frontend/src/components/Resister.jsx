import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
// const Register = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center h-screen">
//         <dialog id="my_modal_3" className="modal" >
//           <div className="modal-box">
//             <form method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </Link>
            
//             <h3 className="font-bold text-lg">Resister</h3>
//             <div className="mt-4">
//               <span>Name</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 required
//                 className="w-80 px-3 py-1 border rounded-md outline-0"
//               />
//             </div>
//             <div className="mt-4">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 className="w-80 px-3 py-1 border rounded-md outline-0"
//               />
//             </div>
//             <div className="mt-4">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-0"

//               />
//             </div>
//             <div className="flex justify-between">
//               <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-600 duration-300">
//                 SignUp
//               </button>
//               <p className="mt-6">
//                 Have Account?{" "}
//                 <a
//                  className="text-blue-500"
//                  onClick={()=>{
//                 document.getElementById("my_modal_3").showModal()}}
//                  >
//                   Login
//                 </a>
//                 <Login/>
//               </p>
//             </div>
//             </form>
//           </div>
//       </dialog>
//       </div>
//     </>
//   );
// };
// export default Register;

const Register = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const onSubmit = (data) => console.log(data);
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
                 {...register("name", { required: true })}
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
