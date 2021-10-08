import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';

export default function HomeScreen(){

    function ProductCard(props) {
        return (
            <div className="rounded shadow-lg h-60 w-50 my-7 bg-white bg-opacity-20 hover:bg-gray-100 transform motion-safe hover:scale-105"> 
                <div className="flex justify-center"> <img src="https://cdn-icons-png.flaticon.com/512/5032/5032177.png" className="mx-20 my-5 w-20 h-20"/> </div>
                <div className="font-bold text-lg text-center">Product Name</div>
                <p className="text-left mx-10 list-none"> 
                    <li> Quantity </li>
                    <li> Price </li>
                </p>
            </div>
        )
    }
    
    return(
        <div className="w-full h-full bg-gradient-to-br from-blue-250 px-10 to-pink-200 overflow-auto">
            <div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-column">               
                    <div className="lg:text-3xl mt-4 font-bold lg:py-4 grid-span-2"> CARETEX </div>
                    <div className="flex lg:flex-row">
                        <a href="" className="p-4 mt-4 opacity-80"> <ListIcon/> Order </a> 
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonIcon/> Login </a>
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonAddIcon/> Register </a>
                    </div>
            </div>
            <img src="https://t3.ftcdn.net/jpg/03/20/67/68/360_F_320676834_dlqls0LHDYnMWm1CuAOuawn7rVXBiJ7B.jpg" className="opacity-60 w-screen h-60"/>
            <div className="grid lg:grid-cols-3 gap-x-12 xs:grid-cols-1 sm:grid-cols-2">
                <div> <ProductCard/> </div>
                <div> <ProductCard/> </div>
                <div> <ProductCard/> </div>
                <div> <ProductCard/> </div>
                <div> <ProductCard/> </div>
                <div> <ProductCard/> </div>
            </div>
        </div>
    )
}