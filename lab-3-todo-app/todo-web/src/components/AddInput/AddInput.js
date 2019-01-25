import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField/TextField';
import Fab from '@material-ui/core/Fab/Fab';
import AddIcon from '@material-ui/icons/Add';
import { bool, string } from 'prop-types';

const TODO_API_URL = process.env.REACT_APP_TODO_API_URL;

class AddInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  handleChange(evt) {
    this.setState({
      text: evt.target.value,
    });
  }

  /**
   * Retrieves the text value from the state and creates a task using the API,
   * then resetting the value of the text.
   * If an error occurs, we set an error message to the 'error' state.
   */
  async createTodo() {
    const { text } = this.state;

    try {
      await axios.post(TODO_API_URL, { text });
      this.setState({
        text: '',
      });
    } catch (err) {
      this.setState({
        error: 'Failed to save task.',
      });
    }
  }

  render() {
    const { text, error } = this.state;
    const {
      name, placeholder, autoFocus, required,
    } = this.props;

    return (
      <div style={{ paddingBottom: 16, display: 'flex' }}>
        <TextField
          type="text"
          name={name}
          label={placeholder}
          value={text}
          required={required}
          autoFocus={autoFocus}
          onChange={this.handleChange}
          variant="outlined"
          style={{ flex: 1 }}
          error={!!error}
          helperText={error}
        />

        <Fab
          disabled={!text}
          onClick={this.createTodo}
          size="medium"
          color="primary"
          style={{ marginLeft: 8 }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

AddInput.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  autoFocus: bool,
  required: bool,
};

AddInput.defaultProps = {
  autoFocus: false,
  required: false,
};

export default AddInput;
