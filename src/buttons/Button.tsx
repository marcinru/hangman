interface ButtonProps {
    label: string;
    type: 'button' | 'submit';
    onClick?: () => void;
}

const Button = ({ label, type, onClick }: ButtonProps) => (
    <button
        className="uppercase text-white bg-orange-700 border border-orange-700 rounded-md px-4 py-1"
        onClick={onClick}
        type={type}
    >
        {label}
    </button>
);

export default Button;
