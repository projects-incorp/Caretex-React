import Profile from "./Project/Profile/profile";
import HomeScreen from "./Project/Homescreen/home";
import Login from "./Project/Auth/login";
import SignUp from "./Project/Auth/register";


function App() {
  return (
    <div className="font-body">
      <header className="flex h-screen w-screen">

        {<a
          className="m-auto text-5xl font-bold italic text-center"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caretex Homepage

        </a>}
//         <Profile />
        {/* <HomeScreen/> */}
        {/* <Profile /> */}
        {/* <Login/> */}

      </header>
    </div>
  );
}

export default App;
