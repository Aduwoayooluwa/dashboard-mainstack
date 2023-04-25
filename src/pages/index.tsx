import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Dashboard from '@/web/Dashboard'
import MobileView from '@/Layout/MobileView'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "600", "800"] })

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Dashboard />
      <MobileView />
    </main>
  )
}
