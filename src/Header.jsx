import { memo } from "react";
import SearchBox from './SearchBox';

function Header({ search, handleSearch }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>

      <SearchBox search={search} handleSearch={handleSearch} />
    </header>
  );
};

export default memo(Header);
