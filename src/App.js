import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Nav           from "./components/Nav";
import DataContact   from "./components/DataContact";
import DataBody      from "./components/DataBody";
import DataPortfolio from "./components/DataPortfolio";
import Footer        from "./components/footer";
// import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component= {DataBody} />
          <Route exact path="/React-portfolio" component= {DataBody} />
          <Route exact path="/contact" component={DataContact} />
          <Route exact path="/portFolio" component={DataPortfolio} />
          <Route path="/" render={() => <div>{Route.path}  404 Error Page not found</div>} />
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
    

  );
};

export default App;