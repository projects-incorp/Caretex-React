import { useEffect, useState } from "react";
import ImgCard from "./img-card";
import validation from "./validation";

export default function Profile() {
  const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    location: "",
  };

  const [errors, setErrors] = useState({});

  const [value, setValue] = useState(initialState);

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validation(value));
    setDataIsCorrect(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      //yaha se data utha lena
      setValue(initialState);
    }
  }, [errors]);

  return (
    <div className="xl:mx-10">
      <div className="py-5 px-10">
        <p className=" font-semibold text-4xl">User Details</p>
      </div>
      <form>
        <div className="grid gap-8 lg:grid-cols-4 p-10 sm:grid-cols-2 grid-cols-1">
          <div className="shadow-lg py-10 flex flex-col border-b-8 border-yellow-300 h-full ">
            <ImgCard />
          </div>
          <div className="shadow-lg sm:col-start-1 sm:col-span-2 sm:row-start-2 lg:col-start-2 lg:row-start-1  py-10 border-b-8 border-yellow-300 h-full ">
            {/* Details  */}
            <p className="text-2xl font-semibold ml-4">Details</p>
            <div className="grid mt-4 grid-cols-4 h-full ">
              <div className="col-span-3 ml-4 ">
                <p className="p-2 mt-6 text-sm">Display Name</p>
                <input
                  name="username"
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  onChange={handleChange}
                  value={value.username}
                  placeholder="User123"
                ></input>
                {errors.username && (
                  <p className="text-red-600 text-sm">{errors.username}</p>
                )}
                <p className="p-2 mt-6 text-sm">First Name</p>
                <input
                  name="firstname"
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  onChange={handleChange}
                  value={value.firstname}
                  placeholder="Name"
                ></input>
                {errors.firstname && (
                  <p className="text-red-600 text-sm">{errors.firstname}</p>
                )}
                <p className="p-2 mt-6 text-sm">Last Name</p>
                <input
                  name="lastname"
                  type="text"
                  className="outline-none border-b-2 pl-2 p-1 w-11/12 border-black"
                  onChange={handleChange}
                  value={value.lastname}
                  placeholder="Surname"
                ></input>
                {errors.lastname && (
                  <p className="text-red-600 text-sm">{errors.lastname}</p>
                )}
              </div>
              <div className=" ">
                <p className="p-2 mt-6 text-sm">DD/MM/YY</p>
                <input
                  name="date"
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
          <div className="shadow-lg py-10 border-b-8 border-yellow-300 h-full ">
            {/* Contact */}
            <p className="text-2xl font-semibold ml-4">Contact</p>
            <div className="h-full ml-4 ">
              <p className="p-2 mt-10 text-sm">Your Email</p>
              <input
                name="email"
                type="email"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                onChange={handleChange}
                value={value.email}
                placeholder="abc@xyz.com"
              ></input>
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
              <p className="p-2 mt-6 text-sm">Mobile Number</p>
              <input
                name="number"
                type="tel"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                onChange={handleChange}
                value={value.number}
                placeholder="2020202020"
              ></input>
              {errors.number && (
                <p className="text-red-600 text-sm">{errors.number}</p>
              )}
              <p className="p-2 mt-6 text-sm">Location</p>
              <input
                name="location"
                type="text"
                className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
                onChange={handleChange}
                value={value.location}
                placeholder="Mumbai"
              ></input>
              {errors.location && (
                <p className="text-red-600 text-sm">{errors.location}</p>
              )}
            </div>
          </div>
        </div>
        <div className=" p-10 flex justify-end ">
          <button class="bg-white mr-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            class="bg-yellow-400 ml-2 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded-full"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
