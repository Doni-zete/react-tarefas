import { Link } from "react-router-dom";
import sorvetBackground from "../../assets/error-404-not-found.png";

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <button className="bg-pink-300 hover:bg-pink-400 w-full py-2 px-4 rounded text-white">
          Voltar
        </button>
      </Link>
      <img className="header-banner" src={sorvetBackground} alt="" />
    </div>
  );
};

export default NotFound;
