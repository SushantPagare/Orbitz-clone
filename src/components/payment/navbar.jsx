import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="bluetop"></div>
      <div className="navflex">
        <div>
          <img
            className="nav-image"
            src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
          ></img>
        </div>
        <div className="orbucks">
          <button className="b-orbucks">Orbucks</button>
        </div>
      </div>
    </div>
  );
};
