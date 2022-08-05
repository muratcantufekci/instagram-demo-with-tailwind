import { useField } from "formik";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Input = ({label, type, ...props}) => {

    const [field, meta, helpers] = useField(props)
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if(show) {
            setType('text')
        } else if(type === 'password'){
            setType('password')
        }
        // eslint-disable-next-line
    },[show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input type= {inputType} className={classNames({
                "px-2 outline-none text-xs bg-transparent  w-full h-[38px]": true,
                "pt-[10px]": field.value 
            })} {...field} {...props} />
            <small className={classNames({
                "absolute  left-[9px] cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all ":true,
                "text-xs top-1/2": !field.value,
                "text-[10px] top-2.5":field.value
        })}>{label}</small>
            {type === 'password' && field.value && (
                <div onClick={() => setShow(show => !show)} className="h-full flex cursor-pointer select-none items-center text-sm semi-bold pr-2">
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
    )
} 
export default Input;