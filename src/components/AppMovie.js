import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../routes/Home";
import Movie from "./Movie";
import Detail from "../routes/Detail";

function AppMovie() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppMovie;
