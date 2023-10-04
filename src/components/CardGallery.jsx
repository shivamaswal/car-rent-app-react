import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

const CardGallery = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.min(Math.ceil(data.length / itemsPerPage), 10));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="gallery">
        {currentItems.map((car, index) => {
          return <Card key={index} {...car} />;
        })}
      </div>
      <div className="pagination-container">
        <p className="pagination-count">
          {itemOffset + currentItems.length} from {data.length}
        </p>
        <span>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FaArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<FaArrowLeft />}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeClassName="active"
          />
        </span>
      </div>
    </>
  );
};
export default CardGallery;
