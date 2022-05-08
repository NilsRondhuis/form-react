import { Component } from 'react';
import s from './Form.module.css';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleCheckboxChange = e => {
    const { checked } = e.target;
    this.setState({ agreed: checked });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login ${login}, Email ${email}, Password ${password}, Agreed ${agreed}`,
    );

    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="login"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              checked={gender === Gender.MALE}
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              checked={gender === Gender.FEMALE}
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <label>
          Agreed to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <button type="submit" disabled={!agreed}>
          Sing up as {login}
        </button>
      </form>
    );
  }
}

export default Form;
