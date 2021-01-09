import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import AddRecipe from "./components/AddRecipe";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { useState } from "react";

const MainArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [user, setUser] = useState();
  const [value, SetValue] = useState();

  const handleChange = (e) => {
    SetValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  console.log("VALUE", value);
  console.log("USER", user);

  return (
    <div className="App">
      <GlobalStyles />

      <Route path="/" exact>
        <MainArea>
          <Login
            handleChange={handleChange}
            setUser={setUser}
            value={value}
            user={user}
          />
        </MainArea>
      </Route>
      <Route path="/register" exact>
        <MainArea>
          <Register handleChange={handleChange} value={value} />
        </MainArea>
      </Route>
      <Route path="/explore" exact>
        <Nav />
        <Explore />
      </Route>
      <Route path="/addrecipe" exact>
        <Nav />
        <AddRecipe handleChange={handleChange} />
      </Route>
      <Route path="/contact" exact>
        <Nav />
        <Contact />
      </Route>
      <Route
        path="/home"
        render={() =>
          user ? (
            <div>
              <Nav />
              <Home user={user} />
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
}

const GlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
`;

export default App;
