import React from 'react';
import Link from '../../01-atoms/link';
import Icon from '../../01-atoms/icon';

const Pagination = ({ pages = [], currentPage }) => {
  return (
    <nav
      role='navigation'
      aria-label='Pagination Navigation'
      className='m-pagination'
    >
      <ul className='m-pagination__list'>
        <li>
          <Link
            classes={[
              `a-link a-link--pagination a-link--pagination-prev ${currentPage ===
                '1' && 'a-link--disabled'}`,
            ]}
          >
            <span>
              <Icon name='arrow-left' />
            </span>
          </Link>
        </li>
        {pages.map((page) => (
          <li key={page}>
            {page === '…' ? (
              <span className='a-link a-link--pagination'>
                <span>{page}</span>
              </span>
            ) : (
              <Link
                classes={[
                  `a-link a-link--pagination ${currentPage === page &&
                    'a-link--active'}`,
                ]}
              >
                <span>{page}</span>
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            classes={[
              `a-link a-link--pagination a-link--pagination-next ${currentPage ===
                pages[pages.length - 1] && 'a-link--disabled'}`,
            ]}
          >
            <span>
              <Icon name='arrow-right' />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
