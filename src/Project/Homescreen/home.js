import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';
import Menubar from '../../Shared/Menubar/menubar';
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import FeatherIcon from "feather-icons-react";

export default function HomeScreen() {
  const [isOpen, setOpen] = useState(false);
  function Navbar() {
    return (
      <div className="z-20 w-full flex flex-col">
        <div className="flex flex-row justify-between h-24 md:py-8 py-4">
        
            <div className="lg:text-3xl text-2xl font-bold md:mt-4 mt-2"> CARETEX </div>
            <div className="hidden md:flex lg:flex-row justify-between">
              <a href="" className="p-4 opacity-80"> <ListIcon /> Order </a>
              <a href="" className="p-4 opacity-80"> <PersonIcon /> Login </a>
              <a href="" className="p-4  opacity-80"> <PersonAddIcon /> Register </a>
            </div>
            <div className="md:hidden flex">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}

                size="26"
              />
          
          </div>
        </div>
        <Menubar show={isOpen} />
      </div>
    );
  }

  function ProductCard(props) {
    return (
      <div className="rounded shadow-lg h-60 w-50 my-7 bg-white bg-opacity-20 hover:bg-gray-100 transform motion-safe hover:scale-105">
        <div className="flex justify-center"> 
        <img src="https://cdn-icons-png.flaticon.com/512/5032/5032177.png" className="mx-20 my-5 w-20 h-20" />
        </div>
        <div className="font-bold text-lg text-center">Product Name</div>
        <p className="text-left mx-10 list-none">
          <li> Quantity </li>
          <li> Price </li>
        </p>
      </div>
    )
  }

  function Loader() {
    return (
      <div className="rounded shadow-lg h-60 w-50 my-7 bg-white bg-opacity-20 hover:bg-gray-100 transform motion-safe hover:scale-105">
        <div className="flex justify-center">
          <div className="mt-5"> <Skeleton variant="rectangular" width={250} height={120}/> </div>
        </div>
        <div className="flex justify-center mt-3"> <Skeleton variant="text" width={250}/> </div>
        <div className="flex justify-center"> <Skeleton variant="text" width={250}/> </div>
      </div>
    )
  }


  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-250 px-10 to-pink-200 overflow-auto">
      <Navbar />
      <img src="https://t3.ftcdn.net/jpg/03/20/67/68/360_F_320676834_dlqls0LHDYnMWm1CuAOuawn7rVXBiJ7B.jpg" className={"opacity-60 w-screen h-60 " + (isOpen ? "hidden" : "")} />
      <div className={"grid lg:grid-cols-3 gap-x-12 xs:grid-cols-1 sm:grid-cols-2 "+(isOpen ? "hidden" : "")}>
        <div> <Loader/> </div>
        <div> <ProductCard /> </div>
        <div> <ProductCard /> </div>
        <div> <ProductCard /> </div>
        <div> <ProductCard /> </div>
        <div> <ProductCard /> </div>
      </div>
    </div>
  )
}