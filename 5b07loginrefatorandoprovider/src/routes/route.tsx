import { useEffect } from "react";
import { Redirect, Route as ReactDOMRoute, RouteProps } from "react-router";
import { useAuth } from '../providers/AuthContent'
import { ComponentType } from 'react'

interface Props extends RouteProps{
  isPrivate?: boolean;
  component: ComponentType;
}


const Route = ({ isPrivate = false, component: Component, ...rest }: Props) => {
  const { authToken } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!authToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/"} />
        );
      }}
    />
  );
};

export default Route;