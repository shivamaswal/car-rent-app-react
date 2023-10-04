import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navigation = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <form className="nav-form">
            <input
              className="nav-input"
              type="text"
              placeholder="Search.."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="nav-btn" onClick={handleClick}>
              <BsSearch />
            </button>
          </form>
          <span className="nav-item">Relevance</span>
          <span className="nav-item">All brands</span>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
