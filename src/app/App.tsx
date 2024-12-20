import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Welcome from './components/Welcome/Welcome';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <Router>
      <div className={styles.appContainer}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />
        <main className={styles.container}>
          <Container className={styles.container}>
            <header className={styles.appHeader}>
              <FontAwesomeIcon
                icon={faReact}
                size="6x"
                className={styles.appLogo}
              />
              <Welcome />
              <Typography variant="body1" component="p">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setCount((count) => count + 1)}
                >
                  count is: {count}
                </Button>
              </Typography>
              <Typography variant="body1" component="p">
                Edit <code>App.tsx</code> and save to test HMR updates.
              </Typography>
              <Typography variant="body1" component="p">
                <Link
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </Link>
                {' | '}
                <Link
                  href="https://vitejs.dev/guide/features.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite Docs
                </Link>
              </Typography>
              <Switch>
                <Route path="/about">
                  <main>About</main>
                </Route>
              </Switch>
            </header>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
