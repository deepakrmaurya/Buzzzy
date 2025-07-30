import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <NavBar />
      <div className="m-5">
        <div className="font-bold text-2xl pl-5 pt-2">Your Profile </div>
        <div className="border-2 rounded-2xl mt-2 flex">
          <div>
            <img className="rounded-2xl m-2 p-2 w-50" src={user?.photoURL} />
          </div>

          <div>
            <h1 className="font-bold text-4xl pt-10 pl-5">
              {user?.displayName}
            </h1>
            <h1 className=" text-2xl pl-6 pt-2   ">{user?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
