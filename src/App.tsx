import React from "react";
import { Box, Container } from "@mui/material";

import Header from "./components/Header";
import MainView from "./components/MainView";

function App() {
  return (
    <Box bgcolor={"#000"}>
      <Container maxWidth={"lg"} style={{ padding: 50, minHeight: "100vh" }}>
        <Header />
        <MainView />
      </Container>
    </Box>
  );
}

export default App;
