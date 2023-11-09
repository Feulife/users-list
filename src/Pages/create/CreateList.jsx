import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_LIST } from "../../graphql/query";
import { CREATE_LIST_MUTATION } from "../../graphql/mutation";
import {Button, CssBaseline, TextField, Box, Avatar, Typography, Container} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "./Create.module.css";

export const CreateList = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [createMutation] = useMutation(CREATE_LIST_MUTATION, {
    refetchQueries: [{ query: GET_LIST }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation({
      variables: {
        name,
        surname,
        email,
        telephone,
        birthday
      }
    })
  };

  return (
    <div className={styles.createPage}>
      <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create data of user
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              value={name}
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="surname"
              label="Surname"
              type="surname"
              value={surname}
              autoComplete="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              label="Email"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={telephone}
              label="Telephone"
              name="telephone"
              autoComplete="telephone"
              onChange={(e) => setTelephone(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={birthday}
              label="Birthday"
              name="birthday"
              autoComplete="birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Send data
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};