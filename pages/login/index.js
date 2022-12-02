import Link from "next/link";

export default function Login() {
  return (
    <>
      <form>
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
          placeholder="password"
          minLength="6"
          required
        />

        <button type="submit" label="login">
          ANMELDEN
        </button>
      </form>
      <Link href="/register">
        <p>Registrieren</p>
      </Link>
    </>
  );
}
