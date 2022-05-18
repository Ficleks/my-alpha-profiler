import { CommonInput } from "../../components/CommonInput";
import { Input } from "../../components/CommonInput/styles";
import { CommonButton } from "../../components/CommonButton";
import { SectionSignUp } from "./styles";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate()
  return <div>
    <h1>SignUp</h1>
    <h2>Criando sua conta</h2>
    <form>
      <SectionSignUp>
      <CommonInput placeholder="Nome de usuário" type="user"></CommonInput>
      <CommonInput placeholder="Crie seu Email" type="email"></CommonInput>
      <CommonInput placeholder="Crie sua Senha" type="password"></CommonInput>
      <CommonInput placeholder="Data de Nascimento" type="date"></CommonInput>
      <CommonButton onClick={() => navigate('/home')} label="Criar Conta"></CommonButton>
      </SectionSignUp>
    </form>
  </div>;
};
