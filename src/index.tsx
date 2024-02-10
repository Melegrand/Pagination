import * as React from "react";

interface IProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    visiblePages: number;
    setCurrentPage: (page: number) => void;
}
function Pagination(props: IProps) {
    const { totalItems, itemsPerPage, currentPage, setCurrentPage, visiblePages } = props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const halfVisible = Math.floor(visiblePages / 2);
    const min = Math.max(1, currentPage - halfVisible);
    const max = Math.min(min + visiblePages - 1, totalPages);
    const renderPageNumbers = () => {
    const pageNumbersToShow = [];
    for (let i = min; i <= max; i++) {
      pageNumbersToShow.push(i);
    }

    return (
        <nav role='navigation' aria-label='Pagination liste des campagnes'>
            <ul className="pagination">
                {currentPage > 1 && (
                <>
                    <li><button onClick={() => setCurrentPage(1)}  aria-label={'Première page'}>&laquo;</button></li>
                    <li><button onClick={() => setCurrentPage(currentPage - 1)}  aria-label={'Page : ' + (currentPage - 1)}>&lsaquo;</button></li>
                </>
                )}

                {pageNumbersToShow[0] > 1 && (
                    <span>...</span>
                )}

                {pageNumbersToShow.map((number) => (
                    pageNumbersToShow.length > 1 &&
                    <li key={number}><button
                        className={number === currentPage ? 'current-page' : ''}
                        onClick={() => setCurrentPage(number)}
                        aria-label={'Page : ' + currentPage}
                        aria-current={number === currentPage ? 'page' : false}
                    >
                    {number}
                    </button></li>
                    
                ))}

                {pageNumbersToShow[visiblePages - 1] < totalPages && (
                    <li><span>...</span></li>
                )}

                {currentPage < totalPages && (
                    <>
                        <li><button onClick={() => setCurrentPage(currentPage + 1)} aria-label={'Page : ' + (currentPage + 1)}>&rsaquo;</button></li>
                        <li><button onClick={() => setCurrentPage(totalPages)}  aria-label={'Dernière page : ' + totalPages}>&raquo;</button></li>
                    </>
                )}
            </ul>
        </nav>
      );
  };
  return renderPageNumbers();
}

export default Pagination;
