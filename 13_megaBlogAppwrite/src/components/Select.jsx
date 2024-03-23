import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className,
    ...props
}, ref) => {
    const id = useId();
  return (
    <div className='w-full'>
      {label && <label className='' htmlFor={id}></label>}
      <select
        className={`px-3 py-2 rounded-lg bg-white
                   text-black outline-none focus:bg-gray-50
                   duration-200 border border-gray-200 w-full ${className}`
                  }
        {...props}
        id={id}
        ref={ref}
      >
        {/* optional chaining to avoid crashing the website i.e, we optionally loop to check whether option field is empty or not */}
        {options?.map((option) => (
            <option 
                key={option} 
                value={option}
            >
                {option}
            </option>
        ))}
      </select>
    </div>
  )
}

// another way to pass the reference to the component
export default React.forwardRef(Select);
