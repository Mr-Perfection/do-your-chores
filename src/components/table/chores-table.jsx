import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';

import './styles/table.css';

export default function ChoresTable({ removeItem, items, updateItem }) {
  const columns = [{
    title: 'Chore Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <b>{text}</b>,
  }, {
    title: 'Actions',
    key: 'action',
    render: (title, record) => (
      <div>
        <a href="#" onClick={() => removeItem(record)}>Remove</a>
      </div>
    ),
  }];
  const dataSource = items;

  return <Table columns={columns} dataSource={dataSource} />;
}
