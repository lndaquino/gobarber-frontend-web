import React, { ButtonHTMLAttributes } from 'react';
import loadingImg from '../../assets/loading.gif';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {/* {loading ? <img src={loadingImg} alt="Carregando..." /> : children} */}
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
