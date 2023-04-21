import React from 'react'

const Header = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/know-me',
      text: 'Know me',
    },
    {
      url: '/education-and-skills',
      text: 'Education & Skills',
    },
    {
      url: '/portfolio',
      text: 'Portfolio',
    },
    {
      url: '/contact',
      text: 'Contact',
    },
  ]

  return (
    <header className="flex justify-between pl-5 pr-12 pt-8">
      <div className="p-4 text-2xl font-bold">{currentYear}</div>
      <div>
        {navigationLinks.map((link) => (
          <button key={link.url} className="py-4 px-6">
            {link.text}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header
