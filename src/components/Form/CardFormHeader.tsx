interface CardFormHeaderProps {
  headerTitle: string;
  coloredHeaderTitle: string;
}

export const CardFormHeader = ({
  headerTitle,
  coloredHeaderTitle,
}: CardFormHeaderProps) => {
  return (
    <header>
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        {headerTitle} <span className="text-primary">{coloredHeaderTitle}</span>
      </h1>
    </header>
  );
};
