import React, { Component } from 'react';

import Table from 'antd/lib/table';
import Icon from 'antd/lib/icon';

const styles = {
  table: {
    position: 'relative',
    margin: 'auto',
    marginTop: '100px',
    maxWidth: '800px',
  },
};
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <b>{text}</b>,
}, {
  title: 'Missed Chores',
  dataIndex: 'missedChores',
  key: 'missedChores',
}, {
  title: 'Chores of the week',
  dataIndex: 'choresOfTheWeek',
  key: 'choresOfTheWeek',
  render: chores => chores.map(chore => <p>{chore}</p>),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Finished this week's chore</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'Stephen Lee',
  missedChores: 1,
  choresOfTheWeek: ['Clean kitchen', 'Empty trash'],
}, {
  key: '2',
  name: 'Edwin Chu',
  missedChores: 1,
  choresOfTheWeek: ['Clean bathroom'],
}, {
  key: '3',
  name: 'Gordon Wang',
  missedChores: 1,
  choresOfTheWeek: ['Sweep and mop the floor'],
}];

export default class Chores extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={styles.table}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}
