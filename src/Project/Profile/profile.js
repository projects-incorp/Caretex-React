import Contact from "./contact";
import Details from "./details";
import ImgCard from "./img-card";

export default function Profile() {
  return (
    <div className="xl:mx-10">
      <div className="py-5 px-10">
        <p className=" font-semibold text-4xl">User Details</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 p-10 sm:grid-cols-2 grid-cols-1">
        <div className="shadow-lg py-10 flex flex-col border-b-8 border-yellow-300 h-full ">
          <ImgCard />
        </div>
        <div className="shadow-lg sm:col-start-1 sm:col-span-2 sm:row-start-2 lg:col-start-2 lg:row-start-1  py-10 border-b-8 border-yellow-300 h-full ">
          <Details />
        </div>
        <div className="shadow-lg py-10 border-b-8 border-yellow-300 h-full ">
          <Contact />
        </div>
      </div>
      <div className=" p-10 flex justify-end ">
        <button class="bg-white mr-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
          Cancel
        </button>
        <button class="bg-yellow-400 ml-2 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded-full">
          Save Changes
        </button>
      </div>
    </div>
  );
}
