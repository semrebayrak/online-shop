import React, { useState, createContext, useEffect } from "react";
import { useCallback } from "react";

const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState();
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      await fetch("http://renkligoz.com/data/companies.json")
        .then((res) => res.json())
        .then((result) => setCompanies(result));
    };

    if (companies == null) fetchCompanies();
    else setCompaniesLoading(false);
  }, [companies]);

  return (
    <CompaniesContext.Provider value={{ companies, companiesLoading }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContext;
