interface FlexBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const Box = ({ className, children }: FlexBoxProps) => {
  return (
    <div className={`flex box-border ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Box;
