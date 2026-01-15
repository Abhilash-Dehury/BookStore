import banner from "../assets/Banner.jpg";

const Banner = () => {
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="sapce-y-12">
            <h1 className="text-bold text-4xl">
              Hello,welcomes here to learn something{" "}
              <span className=" text-pink-600">new everyday !!</span>
            </h1>
            <p className="text-xl mt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <label className="input w-full validator mt-10 flex items-center gap-x-2 border border-gray-300 rounded-md px-2 py-1">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter your email for login" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <button className="btn btn-secondary text-white mt-6 ">Secondary</button>
          </div>
        </div>
        <div className=" order-1  w-full md:w-1/2 flex justify-center   ">
          <img src={banner} className="h-92 w-92 md:h-125 md:w-125" alt="" />
        </div>
      </div>
    </>
  );
};
export default Banner;
