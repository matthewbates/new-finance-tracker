import { SidebarContainer, SidebarItems } from "./SidebarElements";

export const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarItems>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
      </SidebarItems>
    </SidebarContainer>
  );
};
