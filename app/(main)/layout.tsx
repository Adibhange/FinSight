type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="container mx-auto px-5 py-32">{children}</div>;
};

export default layout;
