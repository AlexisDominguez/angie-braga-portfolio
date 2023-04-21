import React, { FC, ReactNode } from 'react'
import Header from '../Header/'
import SideMenuButtons from '../SideMenuButtons/SideMenuButtons'
import OpenToWorkButton from '../OpenToWorkButton/OpenToWorkButton'

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <main className="w-screen max-w-screen-2xl min-h-screen bg-black relative">
      <Header />
      <SideMenuButtons />
      <OpenToWorkButton />
      <div className="px-40">{children}</div>
    </main>
  )
}

export default MainLayout
