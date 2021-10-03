export default function Profile(){
    return (
      <div>
        <div className="grid grid-cols-10">
          <div className="col-start-2 col-span-2">
            <p className="mb-10 font-semibold text-4xl">User Details</p>
          </div>
        </div>
        <div className="grid gap-8 h-1/2 grid-cols-10 ">
          <div className="shadow-lg col-start-2 flex flex-col col-span-2 border-b-8 border-yellow-300 h-full ">
            <img
              src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
              alt="profile"
              className="w-3/5 my-8 rounded-full self-center"
            ></img>
            <div className="max-w-45 flex self-center">
              <h1 className="text-center text-3xl font-semibold">XYZ_d01</h1>
            </div>
          </div>
          <div className="shadow-lg border-b-8 border-yellow-300 h-full col-span-4">
            <p className="text-2xl pt-4 font-semibold ml-4">Details</p>
            <div className="grid mt-4 grid-cols-4 h-full ">
              <div className="col-span-3 ml-4 ">
                <p className="p-2 mt-6 text-sm">Display Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  placeholder="User123"
                ></input>
                <p className="p-2 mt-6 text-sm">First Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  placeholder="Name"
                ></input>
                <p className="p-2 mt-6 text-sm">Last Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  placeholder="Surname"
                ></input>
              </div>
              <div className=" ">
                <p className="p-2 mt-6 text-sm">DD/MM/YY</p>
                <input
                  type="text"
                  className="outline-none border-b-2 p-1 w-10/12 border-black"
                  placeholder="20 02 2020"
                ></input>
                <br />
                <div className="mt-8 m-2">
                  <input
                    className="m-2"
                    type="radio"
                    name="gender"
                    value="male"
                  ></input>
                  <label className="text-lg" for="gender1">
                    Male
                  </label>
                </div>
                <div className="m-2">
                  <input
                    className="m-2"
                    type="radio"
                    name="gender"
                    value="female"
                  ></input>
                  <label className="text-lg" for="gender2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg border-b-8 border-yellow-300 h-full col-span-2 ">
            <p className="text-2xl pt-4 font-semibold ml-4">Contact</p>
            <div className="h-full ml-4 ">
              <p className="p-2 mt-10 text-sm">Your Email</p>
              <input
                type="email"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                placeholder="abc@xyz.com"
              ></input>
              <p className="p-2 mt-6 text-sm">Mobile Number</p>
              <input
                type="tel"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                placeholder="2020202020"
              ></input>
              <p className="p-2 mt-6 text-sm">Location</p>
              <input
                type="text"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                placeholder="Mumbai"
              ></input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10">
          <div className="col-start-8 mt-8 flex justify-end col-span-2 ">
            <button class="bg-white mr-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
              Cancel
            </button>
            <button class="bg-yellow-400 ml-2 hover:bg-yellow-600 w-8/12 text-white font-bold py-2 px-4 rounded-full">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
}