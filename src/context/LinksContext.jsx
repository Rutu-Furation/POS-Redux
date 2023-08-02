import { createContext, useEffect, useState } from "react";

export const LinksContext = createContext();

export const LinksContext_Provider = ({ children }) => {
  const [links, setLinks] = useState("homeLinks");

  useEffect(() => {
    const storedLink = localStorage.getItem("link");
    if (storedLink) {
      setLinks(JSON.parse(storedLink));
    }
  }, []);

  const changeLink = (link) => {
    setLinks(link);
    localStorage.setItem("link", JSON.stringify(link));
  };

  return (
    <LinksContext.Provider value={{ changeLink, links }}>
      {children}
    </LinksContext.Provider>
  );
};
