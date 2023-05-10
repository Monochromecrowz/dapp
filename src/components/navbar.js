"use client";

import { useEffect, useState } from "react";
import { pages } from "../shared/constants";

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

  const goToPage = (page) => {
    window.location.href = page.url;
  };

  return (
    <>
      <div className="container-fluid h-100 d-flex flex-column">
        <div className="row h-100">
          <div className={"col-auto" + (hasSubMenu ? " main-border-right" : "")}>
            {Object.values(pages).map((item) => {
              const { id, title, url } = item;
              const isSelected = menuSelection.id === id;
              return (
                <a
                  key={id}
                  className={`button ${isSelected ? "selected" : ""}`}
                  id={id}
                  onClick={() => {
                    goToPage(item);
                  }}
                  href={url}
                >
                  {title}
                </a>
              );
            })}
          </div>
          {hasSubMenu && (
            <div className="col-auto">
              {Object.values(menuSelection.subpages).map((item) => {
                const { id, title, url } = item;
                const isSelected = subMenuSelection && subMenuSelection.id === id;
                return (
                  <a
                    key={id}
                    className={`button ${isSelected ? "selected" : ""}`}
                    id={id}
                    onClick={() => {
                      goToPage(item);
                    }}
                    href={url}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
