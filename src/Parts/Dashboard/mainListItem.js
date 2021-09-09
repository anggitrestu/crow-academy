import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListItem } from '@material-ui/core';

// export const mainListItem = (
const MainListItem = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={item.pageTitle} />
          </ListItem>
        );
      })}
    </div>
  );
};

export default MainListItem;
