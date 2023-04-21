import React, { FC, ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
}

const Button: FC<IButtonProps> = ({ children }) => {
  return <button className="border px-10 py-2">{children}</button>
}

export default Button
