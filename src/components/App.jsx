import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './AppStyle.module.css';
// KOMPONENT
export class App extends Component {
  // STATE
  state = {
    contacts: [],
    filter: '',
  };
  // ZMIANY STATE => DODAWANIE / USUWANIE
  addContact = (id, name, number) => {
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  // RENDER
  render() {
    console.log('st', this.state);
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} />
        <ContactList state={this.state} />
      </div>
    );
  }
}
