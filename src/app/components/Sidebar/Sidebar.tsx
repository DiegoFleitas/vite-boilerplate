import React from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import styles from './Sidebar.module.css';

interface SidebarProps {
  open: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <div
        className={styles.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
