import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterContacts, clearFilterVal } from '../../redux/actionCreators';
import styles from '../styles/components.module.css';

class FilterInput extends Component {
  handleFilterChange = e => {
    if (e.target.value !== '') {
      this.props.filterContacts(e.target.value);
    } else {
      this.props.clearFilterVal();
    }
  };

  render() {
    console.log(this.props)
    return (
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='Search contacts by name...'
          value={this.props.filterVal}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterVal: state.filter
});

export default connect(mapStateToProps, { filterContacts, clearFilterVal })(FilterInput);
