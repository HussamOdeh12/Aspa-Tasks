import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import ApplyCards from "./components/ApplyCards/ApplyCards";
import CardDetails from "./components/CardDetails/CardDetails";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cards" element={<ApplyCards />} />
          <Route path="/cards/search" element={<ApplyCards />} />
          <Route path="/cards/:id" element={<CardDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
