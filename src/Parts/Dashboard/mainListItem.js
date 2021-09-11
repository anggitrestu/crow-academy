import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

// export const mainListItem = (
const MainListItem = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <Link to={item.pageHref} style={{ listStyle: 'none' }}>
              <ListItemText primary={item.pageTitle} />
            </Link>
          </ListItem>
        );
      })}
    </div>
  );
};

export default MainListItem;
