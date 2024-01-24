import { useRef, useEffect } from "react";

import { SidebarContainer, SidebarItems, SidebarLink } from "./SidebarElements";

import { useClickOutside } from "../../utils/hooks";

export const Sidebar = ({ isOpen, setIsOpen, theme }) => {
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
      <SidebarItems ref={linkRef} theme={theme}>
        <SidebarLink theme={theme} to="/" onClick={() => setIsOpen(false)}>
          Home
        </SidebarLink>
        <SidebarLink
          theme={theme}
          to="/transactions"
          onClick={() => setIsOpen(false)}
        >
          Transactions
        </SidebarLink>
      </SidebarItems>
    </SidebarContainer>
  );
};
