import { useSelector } from "react-redux";

const HeyUser = () => {
  const user = useSelector((store) => store.user);
  //Since the displayName sometime gave error for undefined
  const name = user?.displayName ? user.displayName.split(" ") : ["user"];
  return <div className="font-bold text-2xl pl-5 pt-2">Hey, {name[0]}</div>;
};

export default HeyUser;
