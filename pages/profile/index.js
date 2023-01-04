import styled from "styled-components";

export default function Profile() {
  return (
    <ProfileContainer>
      <p>Benutzername: </p>
      <p>Name: </p>
      <p>E-Mail: </p>

      <h3>Gesuchte Epochen:</h3>
      <EpochList>
        <li>
          <input type="checkbox" id="1" value="14thcentury" />
          <label htmlFor="14thcentury">14. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="2" value="15thcentury" />
          <label htmlFor="15thcentury">15. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="3" value="16thcentury" />
          <label htmlFor="16thcentury">16. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="4" value="17thcentury" />
          <label htmlFor="17thcentury">17. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="5" value="18thcentury" />
          <label htmlFor="18thcentury">18. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="6" value="19thcentury" />
          <label htmlFor="19thcentury">19. Jahrhundert</label>
        </li>
        <li>
          <input type="checkbox" id="7" value="20thcentury" />
          <label htmlFor="20thcentury">20. Jahrhundert</label>
        </li>
      </EpochList>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  height: 100%;
  margin: 20vh 0 0 5vw;
`;

const EpochList = styled.ul`
  list-style: none;
`;
