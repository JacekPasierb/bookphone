import React, { Component } from 'react';
import css from './FilterStyle.module.css';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <label className={css.label}>
          <span>Find contacts by name</span>
          <input type="text" onChange={this.props.changeFilter} ></input>
        </label>
      </div>
    );
  }
}
