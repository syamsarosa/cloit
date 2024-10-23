import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Menu from "./pages/menu";
import ApiList from "./pages/api-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="menu" element={<Menu />} />
          <Route path="api-list" element={<ApiList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
