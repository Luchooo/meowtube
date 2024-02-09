export const SkeletonVideos = () => {
  return (
    <section data-testid="skeleton" className="bg-secondary dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 md:gap-4 xl:gap-8 2xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="w-full h-96 bg-gray-300 rounded-lg "></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
