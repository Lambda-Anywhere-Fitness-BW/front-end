import React, { useState } from "react";
import AppHeader from "../appHeader";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

export default function SearchMain() {
  return (
    <div>
      <AppHeader />
      <SearchBar />

      {/* We have to do map hesdfre */}
      <SearchList />
    </div>
  );
}
