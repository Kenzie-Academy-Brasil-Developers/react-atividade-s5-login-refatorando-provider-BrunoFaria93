import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProviderProps{
    children: ReactNode;
}
interface User {
    email: string;
    password: string;
    token?: string;
}
interface AuthProviderData{
  signIn: (userData: User) => void;
  Logout: () => void;
  authToken: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();
  
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: User) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {

        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);