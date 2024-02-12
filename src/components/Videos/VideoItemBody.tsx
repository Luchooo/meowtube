interface VideoItemBodyProps {
  title: string;
  description: string;
}

export const VideoItemBody = ({ title, description }: VideoItemBodyProps) => {
  return (
    <div>
      <h5 className="text-lg font-bold capitalize">{title}</h5>
      <p className="text-zinc-300/90 capitalize">{description}</p>
    </div>
  );
};
