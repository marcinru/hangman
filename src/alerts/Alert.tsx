interface AlertProps {
  title: string;
  type: "success" | "danger";
  message?: string;
}

export const Alert = ({ title, type, message }: AlertProps) => {
  const className = type === 'success' ? 'bg-green-200 border-green-600 text-green-600' : 'bg-red-200 border-red-600 text-red-600';
  return (
      <div className={`${className} border-l-4 p-4 my-4`} role="alert">
        <p className="font-bold">{title}</p>
        <p>{message}</p>
      </div>
  );
};
