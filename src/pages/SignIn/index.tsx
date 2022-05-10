import { CommonInput } from "../../components/CommonInput";
import {Section} from "./styles"

export const SignIn = () => {
  return (
    <div>
        <h1>SignIn</h1>
        <Section>
          <CommonInput placeholder="Digite seu Email" type="email"></CommonInput>
          <CommonInput placeholder="Digite sua senha" type="password"></CommonInput>
        </Section>
    </div>
  )
};
