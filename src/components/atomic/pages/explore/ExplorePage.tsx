"use client";

import { Loader } from "../../atoms";
import { Searchbar } from "../../molecules";
import { TypesList } from "../../organs";
import useExplorePage from "./useExplorePage";

const ExplorePage = () => {
  const { typesData, isLoadingTypes, isTypesError } = useExplorePage();
  return (
    <main className="max-w-7xl w-full mx-auto flex min-h-screen flex-col items-center justify-between gap-4 p-4 md:p-8">
      <Searchbar />
      <h1 className="text-gray-500 font-extrabold text-xl">Categories</h1>
      {isLoadingTypes ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : isTypesError ? (
        <div>We ran into some issues</div>
      ) : typesData && typesData?.data?.results?.length > 0 ? (
        <TypesList types={typesData?.data?.results} />
      ) : (
        <div>There is no data</div>
      )}
    </main>
  );
};

export default ExplorePage;
