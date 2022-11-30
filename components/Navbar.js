import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link>Home</Link>
        <Link>Favorites</Link>
        <Link>Explore</Link>
        <Link>Profile</Link>
      </div>
    </div>
  );
}
