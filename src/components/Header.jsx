import solidLogo from "../assets/solidjs-logo.png";

const Header = () => {
  return (
    <header>
      <div className="header">
        <img className="logo" src={solidLogo} alt="SolidJS Logo" />
        <h1 className="title">SolidJS Basics</h1>
      </div>
    </header>
  );
};

export default Header;
