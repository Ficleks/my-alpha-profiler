import { Links, Title } from "./styles";


export const Home = () => {
  return (
  <div>
    <Title>
      <h1>Home</h1>
        <section>
          <p><strong>Usuário:</strong> Felipe Alan</p>
          <p><strong>Email:</strong> ficlek13@hotmail.com</p>
          <p><strong>Data:</strong> 01/03/1998</p>
          <p><strong>Senha:</strong> *********</p>
        </section>        
    </Title>
    <Links>
      <p>Acesso á: <a href="http://localhost:3000/signin">SignIn</a></p>
      <p>Acesso á: <a href="http://localhost:3000/editprofile">EditProfile</a></p>
      <p>Acesso á: <a href="http://localhost:3000/signup">SignUp</a></p>
    </Links>
  </div>
  )
};
