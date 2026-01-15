import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout=()=>{
  const [authUser,setAuthUser]=useAuth();
  const handleLogout=()=>{
    try{
        setAuthUser({
          ...authUser,
          user:null
        })
        localStorage.removeItem('Users');
        toast.success("Logout successfully");
        setTimeout(()=>{
         window.location.reload();
        },3000)
       
    }catch(err){
        toast.error("Error"+err.message);
        setTimeout(()=>{},3000);
    }
  }
  return(<>
  <button className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
  onClick={handleLogout}
  >Logout</button>
  </>);
}
export default Logout;