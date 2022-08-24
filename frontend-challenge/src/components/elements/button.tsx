type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  roundedFull?: boolean;
};

export const Button = ({
  children,
  roundedFull,
  disabled,
  ...rest
}: ButtonProps) => {
  const roundedClass = roundedFull ? "rounded-full" : "rounded";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-blue-700";
  return (
    <button
      className={`bg-blue-500 ${disabledClass} text-white font-bold py-2 px-4 ${roundedClass}`}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
