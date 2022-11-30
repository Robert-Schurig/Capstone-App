import Link from "next/link";

export default Navbar = () => {
  return (
    <div>
      <div>
        <Link>ArtDisplay</Link>
        <Link>Favorites</Link>
        <Link>Explore</Link>
        <Link>Profile</Link>
      </div>
    </div>
  );
};
