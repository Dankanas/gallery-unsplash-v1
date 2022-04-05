import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { SubmitSearchBar } from "../../../../store/action";
import NavigationBar from "../NavigationBar";

import routes from "../../../../constants/routes";
const SearchButton: FC<SearchButtonProps> = ({
  input,
  setInput,
}: SearchButtonProps) => {
  const history = useHistory();
  const handleSearch = () => {
    if (input === "Search..." || input.length === 0) {
      history.push(routes.home);
    } else {
      SubmitSearchBar(input);
      setInput("Search...");
    }
  };
  return (
    <div onClick={() => handleSearch()}>
      <NavigationBar
        NavigationItems={[{ name: "search", route: routes.search }]}
      />
    </div>
  );
};

interface SearchButtonProps {
  input: string;
  setInput: (x: string) => void;
}

export default SearchButton;
