import { useRef, useEffect } from "react";

import { SidebarContainer, SidebarWrapper } from "./SidebarElements";

import { useClickOutside } from "../../utils/hooks";
import { Link } from "../Link";

export const Sidebar = ({ isOpen, setIsOpen, theme, links }) => {
  const linkRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.style.height = isOpen
        ? `${linkRef.current.scrollHeight}px`
        : "0";
    }
  }, [isOpen]);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  return (
    <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
      <SidebarWrapper ref={linkRef} theme={theme}>
        {links
          .filter((item) => (item.name !== "" ? item : null))
          .map(({ id, name, path }) => (
            <Link
              key={id}
              theme={theme}
              to={path}
              name={name}
              onClick={() => setIsOpen(false)}
            />
          ))}
      </SidebarWrapper>
    </SidebarContainer>
  );
};
