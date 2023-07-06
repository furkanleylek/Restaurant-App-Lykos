import '@/styles/globals.css'
import { Inter, Josefin_Sans } from 'next/font/google'
import classNames from 'classnames'
import Provider from '@/components/context'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
const josef = Josefin_Sans({ subsets: ['latin'] })

export const Metadata = {
  title: 'Lykos Restorant',
  description: 'Erbaa Lykos restorant cafe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames('w-full h-full bg-white', josef.className)}>
        <div className="flex flex-col">
          <Provider>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}
