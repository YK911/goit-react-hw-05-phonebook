import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/actionCreators";
import shortId from "shortid";
import styles from "../styles/components.module.css";
import { CSSTransition } from "react-transition-group";
import animations from "../styles/animationPhonebook.module.css";
import animationError from "../styles/animationError.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
  isVisible: false,
  isError: false
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  componentDidMount() {
    this.setState({
      isVisible: true
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name === "") {
      return;
    }
    if (
      !this.props.contacts.some(
        item => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      const createdContact = { name, number, id: shortId() };
      this.props.addContact(createdContact);
      this.setState({
        ...INITIAL_STATE
      });
    } else {
      this.setState({
        isError: true
      });
      setTimeout(() => {
        this.setState({
          isError: false
        });
      }, 3000);
    }
  };

  render() {
    const { name, number, isVisible, isError } = this.state;
    return (
      <>
        <CSSTransition in={isVisible} timeout={1000} classNames={animations}>
          <h2>Phonebook</h2>
        </CSSTransition>
        <form onSubmit={this.handleSubmit} className={styles.contactForm}>
          <label className={styles.inputLabel}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.inputLabel}>
            Number:
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>

        <CSSTransition
          in={isError}
          timeout={500}
          classNames={animationError}
          unmountOnExit
        >
          <div
            className={styles.error}
          >{`Contact ${name} already exists!`}</div>
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps, { addContact })(ContactForm);
