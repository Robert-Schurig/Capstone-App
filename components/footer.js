import styled from "styled-components";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import exploreIcon from "../public/exploreIcon.svg";
import imageIcon from "../public/imageIcon.svg";
import likeIcon from "../public/likeIcon.svg";
import profileIcon from "../public/profileIcon.svg";

export default function Footer() {
  const {pathname} = useRouter();

  return (
    <StyledFooter>
      <NavElement active={pathname === "/"}>
        <Link href="/">
          <Image
            className="image"
            src={imageIcon}
            alt="imageIcon"
            height={50}
            width={50}
          />
        </Link>
      </NavElement>

      <NavElement active={pathname.includes("/favoritespage")}>
        <Link href="/favoritespage">
          <Image
            className="image"
            src={likeIcon}
            alt="Like Icon"
            height={50}
            width={50}
          />
        </Link>
      </NavElement>
      <NavElement active={pathname.includes("/explore")}>
        <Link href="/explore">
          <Image
            className="image"
            src={exploreIcon}
            alt="Explore Icon"
            height={50}
            width={50}
          />
        </Link>
      </NavElement>
      <NavElement active={pathname.includes("/profile")}>
        <Link href="/profile">
          <Image
            className="image"
            src={profileIcon}
            alt="Profile Icon"
            height={50}
            width={50}
          />
        </Link>
      </NavElement>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  border-top: solid 4px black;
  .image {
    :hover {
      filter: blur(3px);
    }
  }
`;

const NavElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  ${({active}) => active && `border: solid 4px black;`};
`;