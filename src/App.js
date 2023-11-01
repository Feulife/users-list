import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Pages/navbar/Navbar';
import { List } from './Pages/list/List';
import { CreateList } from './Pages/create/CreateList';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000',
    cache: new InMemoryCache(),
  })
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Container maxWidth="lg">
                <Routes>
                  {/* <Route path="/" element={<Main />} /> */}
                  <Route path="/list" element={<List />} />
                  <Route path="/create" element={<CreateList />} />
                </Routes>
              </Container>
            </ThemeProvider>
          </CssBaseline>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
