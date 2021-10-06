import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';

export default function HomeScreen(){

    function Card(props) {
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

    function Button(props) {
        return (
            <button className="p-3 h-10 rounded shadow-lg text-center hover:bg-gray-100 ..."> {props.name} </button>
        )
    }
    
    return(
        <div className="w-full h-full bg-gradient-to-br from-blue-250 px-10 to-pink-200 overflow-auto">
            <div className="flex flex-row justify-between"> 
                
                    <div className="font-bold text-3xl py-4 grid-span-2 mt-4 font"> CARETEX </div>
                    <div className="list-none flex flex-row">
                        <a href="" className="p-4 mt-4 opacity-80"> <ListIcon/> Order </a> 
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonIcon/> Login </a>
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonAddIcon/> Register </a>
                    </div>
            </div>
            <img src="https://t3.ftcdn.net/jpg/03/20/67/68/360_F_320676834_dlqls0LHDYnMWm1CuAOuawn7rVXBiJ7B.jpg" className="opacity-60 w-screen h-60"/>
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-x-12"> 
                <div> <Card/> </div>
                <div> <Card/> </div>
                <div> <Card/> </div>
                <div> <Card/> </div>
                <div> <Card/> </div>
                <div> <Card/> </div>
            </div>
        </div>
    )
}