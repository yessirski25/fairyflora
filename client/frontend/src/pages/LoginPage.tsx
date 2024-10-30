import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth-provider/AuthProvider"
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export const LoginPage = () => {
    
    const [password, setPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [error] = useState('');
    const {setEmployee} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/employee/login`,
                { emailAddress, password },
                { withCredentials: true }
            );
            
            if (!response.data.success) {
                toast.error(response.data.message);
            } else {
                toast.success("Logged in successfully!");
                setEmployee(response.data);
                console.log(response.data);
                return navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
      <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" style={{ marginTop: 8 }}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
      );
}


export default LoginPage;