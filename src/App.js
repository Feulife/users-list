import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateList } from './Pages/create/CreateList';
import { Navbar } from './Pages/navbar/Navbar';
import { Container, CssBaseline } from '@mui/material';
import './App.css';

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000',
    cache: new InMemoryCache(),
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline>
            <Navbar />
            <Container maxWidth="lg">
              <Routes>
                {/* <Route path="/" element={<Main />} /> */}

                <Route path="/create" element={<CreateList />} />
              </Routes>
            </Container>
          </CssBaseline>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
