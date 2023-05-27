import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul>
        {filterContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
