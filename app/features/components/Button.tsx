
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    // ... your custom props here
}


const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    const baseStyles = 'bg-indigo-700 rounded-full px-6 py-3'
    return <button className={baseStyles} {...rest}>{children}</button>
}

export default Button