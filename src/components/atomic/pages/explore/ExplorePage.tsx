"use client";

import { TypesList } from "../../organs";
import useExplorePage from "./useExplorePage";

const ExplorePage = () => {
  const { typesData, isLoadingTypes, isTypesError } = useExplorePage();
  return (
    <main className="max-w-7xl w-full mx-auto flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {isLoadingTypes ? (
        <div>Loading</div>
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
