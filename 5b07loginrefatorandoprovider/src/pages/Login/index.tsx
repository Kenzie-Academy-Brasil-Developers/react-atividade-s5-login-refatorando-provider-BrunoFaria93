import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useAuth } from '../../providers/AuthContent'
import { useHistory } from "react-router-dom";
import { Button, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface User {
    email: string;
    password: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Senha obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const onSubmit = (data: User) => {
    signIn(data)
  };
  return (
    <div className='big-container'>
      <header className="header-login">
        <h1 className="logo-login">Login Refatorado com TypeScript</h1>
        <div className='info'>Para facilitar a correção: utilize o <strong>email: gabriel.araujo@kenzie.com.br</strong> e a <strong>senha: 123456</strong></div>
      </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div>
            <TextField
              {...register("email")}
              margin="normal"
              variant="outlined"
              label="Email"
              size="small"
              color="primary"
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            ></TextField>
          </div>

          <div>
            <TextField
              {...register("password")}
              margin="normal"
              variant="outlined"
              type='password'
              label="Senha"
              size="small"
              color="primary"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            ></TextField>
          </div>
          </Box>
            
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: 4,
                padding: "7px 40px",
                backgroundColor: "#403CAA",
                "&:hover": {
                  backgroundColor: "#2a2877",
                },
              }}
            >
              Entrar
            </Button>
          </Box>
        </form>
        {error && <span> Usuario ou senha incorretas! </span>}
    </div>
  );
};

export default Login;
