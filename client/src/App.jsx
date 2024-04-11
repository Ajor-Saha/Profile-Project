import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import AutoScroll from "./components/utils/AutoScroll";

function App() {
  return (
    <BrowserRouter>
    <AutoScroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route element={<PrivateRoute /> }>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
