import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactFormStyle.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeName = e => this.setState({ name: e.target.value }); // Przy każdej zmianie zapisuje input do state
  changeNumber = e => this.setState({ number: e.target.value }); // Przy każdej zmianie zapisuje input do state
  handle = e => {
    e.preventDefault();
    const name = this.state.name; // pobiera input z state
    const number = this.state.number; // pobiera input z state
    const id = nanoid(); // przypisuje unikalny id
    this.props.addContact(id, name, number); // przekazuje id i name do funkcji dodania kontaktu w app
    this.setState({ name: '', number:'' }); // czysci w formularzu pole name
  }; // na submit pobiera input, dodaje kontakt nowy i czysci formularz

  render() {
    return (
      <form onSubmit={this.handle}>
        <label className={css.label}>
          <span className={css.titleInput}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeName}
            value={this.state.name} //pokazuje w input aktualny state.name
          />
        </label>
        <label className={css.label}>
          <span className={css.titleInput}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.changeNumber}
            value={this.state.number} //pokazuje w input aktualny state.number
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
