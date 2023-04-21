import React, { FC, ReactNode } from 'react'

interface IOutLineBoxProps {
  children: ReactNode
  customClassName?: string
}

const OutlineBox: FC<IOutLineBoxProps> = ({ children, customClassName }) => {
  return (
    <div className={`border bg-white px-8 py-5 ${customClassName}`}>
      {children}
    </div>
  )
}

export default OutlineBox
