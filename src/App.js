// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NOtFoundPage from './pages/NotFountPage';
import ArticlesListPage from './pages/ArticlesListPage';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router> <div class="container" >
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage}  />
            <Route path="/article/:name" component={ArticlePage}  />
            <Route path="/articles-list" component={ArticlesListPage}   />
            <Route component={NOtFoundPage}   />
          </Switch>
        </div>
      </div>
    </div >
    </Router>
  );
}

export default App;
