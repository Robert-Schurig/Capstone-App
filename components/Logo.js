import styled from "styled-components";

export default function Logo({styling, headerstyle}) {
  return (
    <>
      <StyledLogo styling={styling}>
        sm<BrushStroke headerstyle={headerstyle}>Art</BrushStroke>
      </StyledLogo>
    </>
  );
}

const StyledLogo = styled.section`
  display: flex;
  font-family: "AnotherTypewriter";
  background-color: var(--color3);
  color: var(--color8);
  font-size: 4.5rem;
  width: 260px;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 100px 15px 100px 15px;
  z-index: 5;
  ${props => props.styling}
`;

const BrushStroke = styled.p`
  font-family: "ComforterBrush";
  margin: 0.3rem;
  font-size: 5rem;

  color: var(--color8);
  ${props => props.headerstyle}
`;
