/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import logo from "../assets/buzzzylogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-screen flex z-10 px-2 mx-2 py-2 w-16 absolute justify-between">
      <img className=" w-12 h-12" src={logo} alt="logo" />
      {user && (
        <div className="flex py-2 px-4">
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
          <button
            onClick={handleSignout}
            className="font-bold text-amber-600 cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
