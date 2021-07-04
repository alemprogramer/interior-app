import React from 'react'

const pagination = ({blogPerPage, totalBlogs, paginate, currentPages}) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link arrows" href='!#' tabIndex="-1" aria-disabled="true">
                        <span aria-hidden="true">
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </span>Previous</a>
                </li>
                {pageNumbers.map(n => (
                    <li
                        key={n}
                        className={n === currentPages
                        ? "page-item active"
                        : "page-item"}>
                        <button type='button' className="page-link" onClick={() => paginate(n)}>{n}</button>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link arrows" href='!#'>Next<span aria-hidden="true">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default pagination
