import './globals.scss'
import main from './page.module.scss';
import Navbar from '../components/navbar/navbar';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <div className={main.container}>
          {children}
        </div>
      </body>
    </html>
  )
}

