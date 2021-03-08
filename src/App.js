import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Breadcrumb, Icon, Row, Col, Layout, Card, Avatar, Divider } from 'antd';
import { HashRouter, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from "./home";
import About from "./about";

const { Header, Content, Footer } = Layout;


const App = () => {
  return (    
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
