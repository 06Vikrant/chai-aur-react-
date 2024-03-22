import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props // rest properties the user can enter
}) => {
  return (
    <Button 
        className={`
        px-4 py-2 rounded-lg
         ${type} ${bgColor} ${textColor}
         ${className}
    `} {...props}>
      {children}
    </Button>
  )
}

export default Button
