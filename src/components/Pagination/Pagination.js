import React, {useEffect, useRef} from 'react';
import classes from "./Pagination.module.css"

const Pagination = ({ count, page, handleNext, handlePrev}) => {
    const buttonRef = useRef(null)

    useEffect(() => {
        window.addEventListener('click', (event) => {
           if (event.target === buttonRef.current) {
               window.scroll({
                   top: buttonRef
               })
           }
        })
    }, [ buttonRef ])

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
                ref={buttonRef}
                className={classes.paginationButton}
                onClick={handleNext}
                disabled={page === count}
            >
                Next
            </button>

            <button ref={buttonRef}> Scroll to Top</button>
        </div>
    );
};

export default Pagination;
