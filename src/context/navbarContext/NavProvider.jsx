import NavContext from "./NavContext";
import { useState } from "react";

const NavProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NavContext.Provider value={{ toggleCollapse, isCollapsed }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
