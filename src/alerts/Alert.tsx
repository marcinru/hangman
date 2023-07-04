import styles from "./Alert.module.scss";

interface AlertProps {
  message: string;
  type: "success" | "danger";
}

export const Alert = ({ message, type }: AlertProps) => {
  return (
    <div className={`alert alert-${type} ${styles.alert}`} role="alert">
      {message}
    </div>
  );
};
