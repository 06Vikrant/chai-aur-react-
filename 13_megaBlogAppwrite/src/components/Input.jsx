import React, { useId } from 'react'

const Input = React.forwardRef(({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && 
                <label
                className='inline-block mb-1 pl-1'
                // this for generating unique ID's for accessibility purposes
                htmlFor={id}
                >
                    {label}
                </label>
            }
            <input 
                type={type}
                className={`px-3 py-2 rounded-lg bg-white 
                           text-black outline-none focus:bg-gray-50
                           duration-200 border border-gray-200 w-full ${className}`
                          }
                //   pass ref from the user here
                // this only gives ref to parent comp
                // ref is passed and we take the state access
                ref={ref}
                {...props}
                id={id}
            />
        </div>
        ) 
        
})  
  

export default Input
