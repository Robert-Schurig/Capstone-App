import styled from "styled-components";

export default function Register() {
  return (
    <form>
      <input
        type="text"
        id="surname"
        name="surname"
        placeholder="Surname"
        required
      />

      <input type="text" id="name" name="name" placeholder="Name" required />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="E-Mail"
        required
      />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        minLength="6"
        required
      />

      <input
        type="password"
        id="password_repeat"
        name="password_repeat"
        placeholder="Password bestätigen"
        minLength="6"
        required
      />
      <button type="submit">Registrieren</button>
    </form>
  );
}
