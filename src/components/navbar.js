"use client";

import { useEffect, useState } from "react";
import { pages } from "../shared/constants";
import Image from "next/image";
import Logo from "../assets/crowz_logo.png";
import Link from "next/link";

export default function NavBar() {
  const [menuSelection, setMenuSelection] = useState(pages.homepage);
  const [subMenuSelection, setSubMenuSelection] = useState(null);
  const [hasSubMenu, setHasSubMenu] = useState(false);

  useEffect(() => {
    const url = window.location.pathname;
    let page = null;
    let subpage = null;

    for (const key in pages) {
      const item = pages[key];

      if (item.url === url) {
        page = item;
      }

      for (const spage of item.subpages) {
        if (spage.url === url) {
          subpage = spage;
          page = item;
          break;
        }
      }
    }

    if (page) {
      setMenuSelection(page);
    }

    if (subpage) {
      setSubMenuSelection(subpage);
    }
  }, []);

  useEffect(() => {
    setHasSubMenu(menuSelection.subpages.length > 0 || menuSelection.isSubpage);
  }, [menuSelection]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={"col" + (hasSubMenu ? " column main-border-right" : "")}>
          {Object.values(pages).map((item) => {
            const { id, title, url } = item;
            const isSelected = menuSelection.id === id;
            return (
              <Link key={id} className={`main-menu-item button ${isSelected ? "selected" : ""}`} id={id} href={url}>
                {title}
              </Link>
            );
          })}
        </div>
        <Image src={Logo} alt="CROWZ" align-items="center" className="logo img-responsive" />
      </div>
      {hasSubMenu && (
        <div className="col main-menu" style={{ marginRight: "-8px" }}>
          {Object.values(menuSelection.subpages).map((item) => {
            const { id, title, url } = item;
            const isSelected = subMenuSelection && subMenuSelection.id === id;
            return (
              <Link key={id} className={`main-menu-item button ${isSelected ? "selected" : ""}`} id={id} href={url}>
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
