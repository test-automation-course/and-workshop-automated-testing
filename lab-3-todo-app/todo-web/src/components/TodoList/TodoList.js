import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton/IconButton';

const TODO_API_URL = process.env.REACT_APP_TODO_API_URL;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      error: '',
    };

    this.getTodos = this.getTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentWillMount() {
    this.getTodos();
  }

  /**
   * Retrieves a list of tasks from the backend and sets them to the 'todos' state.
   * If an error occurs, we set an error message to the 'error' state.
   */
  async getTodos() {
    try {
      const { data } = await axios.get(TODO_API_URL);
      this.setState({
        todos: data,
        error: '',
      });
    } catch (err) {
      this.setState({
        error: 'Failed to retrieve tasks.',
      });
    }
  }

  /**
   * Updates the status (completed) of a given task and sets the 'todos' state
   * with the new 'completed' value of the specific updated task.
   * If an error occurs, we set an error message to the 'error' state.
   */
  async updateTodo(todo) {
    const { todos } = this.state;
    const { id, completed } = todo;
    const newStatus = !completed;
    try {
      await axios.put(`${TODO_API_URL}/${id}`, { completed: newStatus });
      const itemToUpdate = todos.findIndex(t => t.id === id);
      todos[itemToUpdate].completed = newStatus;
      this.setState({
        todos,
        error: '',
      });
    } catch (err) {
      this.setState({
        error: 'Failed to update task.',
      });
    }
  }

  /**
   * Deletes a given task and sets the 'todos' state to exclude the deleted task.
   * If an error occurs, we set an error message to the 'error' state.
   */
  async deleteTodo(todo) {
    const { id } = todo;
    try {
      await axios.delete(`${TODO_API_URL}/${id}`);
      this.setState(prevState => ({
        todos: prevState.todos.filter(item => item.id !== id),
        error: '',
      }));
    } catch (err) {
      this.setState({
        error: 'Failed to delete task.',
      });
    }
  }

  render() {
    const { todos, error } = this.state;
    return (
      <div>
        { error && (
          <Typography variant="title" color="error" style={{ paddingTop: 16 }}>
            {error}
          </Typography>
        )}

        <Typography variant="h5" style={{ paddingTop: 16 }}>
          My todo list
        </Typography>

        <List>
          { todos.map(todo => (
            <ListItem key={todo.id} button onClick={() => this.updateTodo(todo)}>
              <Checkbox
                checked={todo.completed}
                color="secondary"
              />

              <ListItemText primary={todo.text} />

              <ListItemSecondaryAction>
                <IconButton onClick={() => this.deleteTodo(todo)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default TodoList;
