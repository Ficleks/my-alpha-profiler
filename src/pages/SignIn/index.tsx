import { useNavigate } from "react-router-dom";
import { CommonButton } from "../../components/CommonButton";
import { CommonInput } from "../../components/CommonInput";
import { SectionSignIn} from "./styles"

export const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>SignIn</h1>
        <SectionSignIn>
          <CommonInput placeholder="Digite seu Email" type="email"></CommonInput>
          <CommonInput placeholder="Digite sua senha" type="password"></CommonInput>
          <CommonButton onClick={() => navigate('/home')} label="Entrar"></CommonButton>
          <CommonButton onClick={() => navigate('/signup')} label="Cadastrar"></CommonButton>
        </SectionSignIn>
    </div>
  )
};
