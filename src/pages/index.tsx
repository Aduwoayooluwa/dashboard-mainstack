import Image from 'next/image'
import { Martel_Sans } from 'next/font/google'
import Dashboard from '@/web/Dashboard'
import MobileView from '@/Layout/MobileView'


const martel_sans = Martel_Sans({ subsets: ['latin'], weight: ["200", "300", "400", "600", "800"] })

export default function Home() {
  return (
    <main className={`${martel_sans.className}`}>
      <Dashboard />
      <MobileView />
    </main>
  )
}
