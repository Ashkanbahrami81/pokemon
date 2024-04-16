"use client";

import React, { ReactNode } from "react";

type SearchResultBoxProps = {
  isSearchInputFocused: boolean;
  children: ReactNode;
};
const SearchResultBox = ({
  isSearchInputFocused,
  children,
}: SearchResultBoxProps) => {
  return (
    <>
      {isSearchInputFocused ? (
        <div className="absolute top-[56px] z-20 p-4 bg-gray-900 text-gray-200 w-full lg:w-[820px] rounded-xl md:left-1/2   md:-translate-x-1/2 flex flex-col gap-2 drop-shadow-2xl shadow-2xl">
          <div className="w-full flex flex-col items-center gap-2 justify-start rounded-2xl">
            {React.Children.toArray(children).length > 0 ? (
              children
            ) : (
              <p>No Pokemon found</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchResultBox;
