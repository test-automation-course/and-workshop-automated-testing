import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import ListAlt from '@material-ui/icons/ListAlt';
import Divider from '@material-ui/core/Divider/Divider';
import AddInput from './AddInput/AddInput';
import TodoList from './TodoList/TodoList';

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
      <AddInput
        name="task"
        placeholder="What do you want to do?"
        autoFocus
        required
      />

      <Divider />

      <TodoList />
    </main>
  </Fragment>
);

export default App;
