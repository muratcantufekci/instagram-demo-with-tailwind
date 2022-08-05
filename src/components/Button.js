const Button = ({type = 'button', children, ...props}) => {
    return (
        <button type={type} {...props} className="h-[30px] w-full flex items-center justify-center gap-x-2 mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">{children}</button>
    )
}

export default Button;