import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {
  return (
    <StyledHeader>
      <Logo
        styling="border-radius: 0;
      font-size: 2rem;
      background: none;
      padding: 0.2rem 0 0 0.3rem ;
      justify-content: start;
      "
        headerstyle="margin: 0.3rem;
      font-size: 2rem;"
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: var(--color4);
`;
