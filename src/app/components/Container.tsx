interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div
      className="
  max-w-[1920px]
  mx-auto
  x1:px-20
  md:px-20
  px-4
  "
    >
      {children}
    </div>
  );
};

export default Container;
