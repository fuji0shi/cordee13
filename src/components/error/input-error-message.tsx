type InputErrorMessageProps = {
  message: string | undefined;
  children: React.ReactNode;
};

export const InputErrorMessage = (props: InputErrorMessageProps) => {
  const { message, children } = props;

  return (
    <div className="flex  w-full flex-col">
      {children}
      <p className="h-6 pl-2 text-xs font-bold text-red-500">{message}</p>
    </div>
  );
};
