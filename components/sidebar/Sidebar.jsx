import Image from "next/image";
import Link from "next/link";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src={resolvedTheme === "dark" ? "/img/logo/hola.png" : "/img/logo/dark.png"}
                alt="brand"
              />
            </Link>
          </div>
          {/* End logo */}

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            {/* End hamburger menu */}
          </div>
        </div>
      </div>
      {/* Header */}

      {/* START LEFT MENU CONTENT */}
      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src="/img/logo/dark.png"
                alt="brand"
              />
            </Link>
          </div>
          {/* END LOGO */}

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "active "
                        : ""
                    }`}
                    href={item.routePath}
                  >
                    <Image
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="homerun"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* END MENU */}

          <CopyRight />
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT MENU CONTENT */}
    </>
  );
};

export default Sidebar;
