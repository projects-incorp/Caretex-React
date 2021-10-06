import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';

export default function HomeScreen(){

    function Card(props) {
        return (
            <div className="rounded shadow-lg h-60 w-50 mx-8 my-7 bg-white bg-opacity-20 hover:bg-gray-100 transform motion-safe hover:scale-105"> 
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
        <div className="bg-gradient-to-br from-blue-250 to-pink-200 overflow-auto">
            <div className="grid grid-cols-4 gap-4"> 
                <div className="grid-span-1"> <img src="https://img-premium.flaticon.com/png/512/844/premium/844012.png?token=exp=1633511194~hmac=7955a8bed69d933a4dd74211c351a3e6" className="w-20 h-20 mt-5 ml-8"/></div>
                    <div className="font-bold text-3xl py-4 grid-span-2 mt-4 font"> CARETEX </div>
                    <div className="list-none flex flex-row justify-between ml-72 w-full">
                        <a href="" className="p-4 mt-4 opacity-80"> <ListIcon/> Order </a> 
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonIcon/> Login </a>
                        <a href="" className="p-4 mt-4 opacity-80"> <PersonAddIcon/> Register </a>
                    </div>
            </div>
            <img src="https://t3.ftcdn.net/jpg/03/20/67/68/360_F_320676834_dlqls0LHDYnMWm1CuAOuawn7rVXBiJ7B.jpg" className="opacity-60 w-max h-60 ml-96"/>
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 mx-72 w-600"> 
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