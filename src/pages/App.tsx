import React from 'react';
import Clock from '../components/Clock';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Form>

      </Form>
      <List></List>
      <Clock />
    </div>
  );
}

export default App;
