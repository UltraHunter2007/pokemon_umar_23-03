import React from 'react';
import classes from "./Pagination.module.css"

const Pagination = ({ count, page, handleNext, handlePrev}) => {
    return (
        <div className={classes.paginationContainer}>
            <button
                className={classes.paginationButton}
                onClick={handlePrev}
                disabled={page === 1}
            >
                Prev
            </button>
            <span className={classes.paginationCount}>{page} / {count}</span>
            <button
                className={classes.paginationButton}
                onClick={handleNext}
                disabled={page === count}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
