import React from 'react';
import propTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = (props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.data.map((item, index) => {
        return (
          <Link
            key={`${index}`}
            color={index === props.data.length - 1 ? 'textPrimary' : 'inherit'}
            href={index === props.data.length - 1 ? item.pageHref : ''}
            onClick={handleClick}
            className={index === props.data.length - 1 ? ' active' : ''}
          >
            {item.pageTitle}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
export default Breadcrumb;
Breadcrumb.propTypes = {
  data: propTypes.array,
};
