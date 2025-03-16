'use client'

import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import { useState } from 'react'

// export const metadata: Metadata = {
//   title: 'TaPago - Divida despesas com amigos',
//   description: 'Divida despesas facilmente com amigos e família. Acompanhe gastos compartilhados, quite dívidas e gerencie finanças em grupo sem complicação.',
//   icons: {
//     icon: [
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       }
//     ],
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={isDarkMode ? 'dark' : ''}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 