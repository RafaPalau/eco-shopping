interface HeadingProps {
  title: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center }: HeadingProps) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <h1 className="font-bold text-3xl">{title}</h1>
    </div>
  );
};

export default Heading;
