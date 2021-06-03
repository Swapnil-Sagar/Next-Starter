import Link from "next/link";
import Image from "next/Image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/spider.png" width={128} height={107} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
