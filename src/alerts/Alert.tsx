interface AlertProps {
  message: string;
  type: "success" | "danger";
}

export const Alert = ({ message, type }: AlertProps) => {
  return (
    <div className={`alert alert-${type} d-inline-block`} role="alert">
      {message}
    </div>
  );
};
