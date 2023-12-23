const Button = ({ children }: { children: React.ReactNode }) => {
    const baseStyles = 'bg-indigo-700 rounded-full px-6 py-4'
    return <button className={baseStyles}>{children}</button>
}

export default Button