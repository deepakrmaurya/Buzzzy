import logo from "../assets/buzzzylogo.png";

const Header = () => {
  return (
    <div>
      <img
        className="z-10 px-2 mx-2 py-2 w-16 absolute "
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Header;
