import React from 'react';
import Router from '@routings/router';
import { observer } from "mobx-react";

export default @observer class App extends React.Component {
  render() {
    return(Router.render())
  }
}
