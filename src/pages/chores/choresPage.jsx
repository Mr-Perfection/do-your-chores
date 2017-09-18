import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { List } from 'immutable';

import { getChoreFilter, getVisibleChores, choresActions } from '../../chores';
import { ChoresTable } from '../../components/table';

export class ChoresPage extends Component {
  componentWillMount() {
    // load chores data & turn on event listeners
    this.props.loadChores();
  }
  componentWillUnmount() {
    // stop listening to changes
    this.props.unloadChores();
  }

  render() {
    const { chores, createChore, removeChore, updateChore } = this.props;
    return (
      <div>
        <ChoresTable removeItem={removeChore} items={chores} updateItem={updateChore} />
      </div>
    );
  }
}

ChoresPage.propTypes = {
  createChore: PropTypes.func.isRequired,
  loadChores: PropTypes.func.isRequired,
  unloadChores: PropTypes.func.isRequired,
  chores: PropTypes.instanceOf(List).isRequired,
};

// Get selected filter & filtered chores in json format
const mapStateToProps = createSelector(
  getChoreFilter,
  getVisibleChores,
  (filterType, chores) => ({
    filterType,
    chores,
  }),
);

const mapDispatchToProps = Object.assign(
  {},
  choresActions,
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChoresPage);
