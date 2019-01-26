import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import ListAlt from '@material-ui/icons/ListAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Todo from './Todo/Todo';

const App = () => (
  <Fragment>
    <CssBaseline />

    <AppBar position="static">
      <Toolbar>
        <ListAlt style={{ marginRight: 8 }} />

        <Typography variant="h6" color="inherit">
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>

    <main style={{ padding: 24 }}>
      <Todo label="What do you want to do?" autoFocus />
    </main>

    <AppBar
      position="fixed"
      color="inherit"
      style={{
        bottom: 0, top: 'auto', height: 48, alignItems: 'center',
      }}
    >
      <FavoriteIcon color="secondary" style={{ margin: 12 }} />
    </AppBar>
  </Fragment>
);

export default App;
