import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";

export default function Login() {
  return (
    <LoginPage>
      <Video autoPlay muted loop>
        <source src="Paintsmall.mp4" type="video/mp4" />
      </Video>
      <Logo styling="margin-top: 35vh;" />

      <FormContainer>
        <StyledForm>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="E-Mail"
            required
          />
          <StyledInput
            type="password"
            id="password"
            name="password"
            placeholder="Passwort"
            minLength="6"
            required
          />

          <StyledLogin href="/images">Anmelden</StyledLogin>
        </StyledForm>
        <StyledLink href="/register">Registrieren</StyledLink>
      </FormContainer>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 12rem;
  height: 2.5rem;
  border-radius: 100px;
  margin: 4%;
`;

const StyledLogin = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 5vh;
  text-decoration: none;
  color: var(--color8);
  font-size: 1.5rem;
  padding: 0.5vw;
  border: 3px solid var(--color8);
  border-radius: 100px;
  background-color: var(--color3);
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  margin: 10% 0 20%;
`;
