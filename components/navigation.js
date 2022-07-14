import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function Navigation() {
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Next.js Multi-Language</a>
        </Link>
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={`nav-link ${
                    router?.pathname === "/" ? "active" : ""
                  }`}
                >
                  {t("header.Home")}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={`nav-link ${
                    router?.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("header.About")}
                </a>
              </Link>
            </li>
          </ul>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
