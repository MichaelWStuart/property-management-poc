import React from 'react';

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  clearForm() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <p>Enter Password</p>
        <form onSubmit={(e) => this.props.testPassword(e, this.state.value, this.clearForm)}>
          <input onChange={this.handleChange} value={this.state.value} type='password'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}
