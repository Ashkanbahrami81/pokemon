"use client";

import useExplore from "./useExplore";

const Explore = () => {
  const { typesData, isLoadingTypes, isTypesError } = useExplore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoadingTypes ? (
        <div>Loading</div>
      ) : isTypesError ? (
        <div>We ran into some issues</div>
      ) : typesData ? (
        typesData.data.results.map((type) => <div>{type?.name}</div>)
      ) : (
        <div>There is no data</div>
      )}
    </main>
  );
};

export default Explore;
