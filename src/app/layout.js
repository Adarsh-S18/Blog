
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProviders from '@/providers/ThemeProviders'
import AuthProvider from '@/providers/authProvider'

const inter = Inter({ subsets: ['latin'] }) 

export const metadata = {
  title: 'Sanujs BLOG',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProviders>
        <div className="container">
          <div className='wrapper'>
            <Navbar/>
              {children}
            <Footer/>
          </div>
        </div>
        </ThemeProviders>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
