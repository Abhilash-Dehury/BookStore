const Contact = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="mt-30 item-conter justify-center text-center">
          <h1 className="text-3xl font-semibold">
            jay shree jagannath !!
            <span className="text-pink-500 ml-2">Let us contact</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nihil similique perspiciatis dolore, animi consequatur cum mollitia
            consectetur doloremque adipisci quia nobis quis. Expedita tempora
            impedit accusamus nulla eum dolorum.
          </p>
          <div className="mt-10 flex justify-center flex-col items-center  gap-5">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form>
                <div className="card-body ">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your name"
                  />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Contact No</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter contact number"
                  />
                  <label className="label">Address</label>
                  <input
                    type="textArea"
                    className="input"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="flex justify-center pb-5">
                  <div className="cursor-pointer w-25   px-2 py-1 border hover:bg-pink-500 hover:text-white rounded-lg duration-300">
                    submit
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
