import React from "react";
import { useLocation } from "react-router-dom";

export default function ProdectSearch() {
  console.log("useLocation()", useLocation());

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  console.log("searchTerm", searchTerm);

  return <div></div>;
}
