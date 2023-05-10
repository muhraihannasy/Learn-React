import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home.component";
import Navigation from "./router/navigation/Navigation.component";
import SignIn from "./router/signin/SignIn.component";

const Shop = () => {
  return <h1>Hello WOlrd</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
