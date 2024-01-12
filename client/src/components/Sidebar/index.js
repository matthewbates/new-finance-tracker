import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { SidebarContainer, SidebarItems, SidebarLink } from "./SidebarElements";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.style.height = isOpen
        ? `${linkRef.current.scrollHeight}px`
        : "0";
    }
  }, [isOpen]);

  return (
    <SidebarContainer $isOpen={isOpen} ref={linkRef}>
      <SidebarItems>
        <SidebarLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </SidebarLink>
        <SidebarLink to="/transactions" onClick={() => setIsOpen(false)}>
          Transactions
        </SidebarLink>
      </SidebarItems>
    </SidebarContainer>
  );
};
