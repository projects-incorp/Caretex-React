export default function Details() {
  return (
    <>
      <p className="text-2xl font-semibold ml-4">Details</p>
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
    </>
  );
}
