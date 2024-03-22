interface ErrorProps {
  msg: string;
}

export const VideosError = ({ msg }: ErrorProps) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 dark:bg-[#09090b]">
      <h1 className="text-4xl">{msg} 😐</h1>
    </section>
  );
};
