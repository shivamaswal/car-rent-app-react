import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 : Not Found</h1>
      <Link to="page/1">Click Here to View Cars</Link>
    </div>
  );
};
export default NotFound;
