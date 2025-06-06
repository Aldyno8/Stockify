import { AddButton, ExportButton } from "../atoms/button";
import { SearchInput, SortInput } from "../atoms/input";
import { useState } from "react";

export const TabAction = ({ handleFormOpen, onSearch, onSort }) => {
  const [sortBy, setSortBy] = useState("productName");
  const [itemToFind, setItemToFind] = useState("");

  return (
    <div className="flex flex-row relative justify-end items-center my-4">
      <SearchInput
        value={itemToFind}
        onChange={(e) => {
          const newValue = e.target.value
          setItemToFind(newValue);
          onSearch(newValue);
        }}
      />
      <SortInput
        value={sortBy}
        onChange={(e) => {
          const newValue = e.target.value || "productName";
          setSortBy(newValue);
          onSort(newValue);
        }}
      />

      <AddButton handleFormOpen={handleFormOpen} />
    </div>
  );
};
