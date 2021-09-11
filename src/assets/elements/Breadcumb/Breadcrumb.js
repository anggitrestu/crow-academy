import React from 'react';
import propTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Link as Links } from '@material-ui/core';
const Breadcrumb = (props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.data.map((item, index) => {
        return (
          <Link to={`${item.pageHref}`} key={index}>
            <Links
              key={`${index}`}
              color={
                index === props.data.length - 1 ? 'textPrimary' : 'inherit'
              }
              className={index === props.data.length - 1 ? ' active' : ''}
            >
              {item.pageTitle}
            </Links>
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
