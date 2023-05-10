import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home.component";
import Navigation from "./router/navigation/Navigation.component";

const Shop = () => {
  return <h1>Hello WOlrd</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
