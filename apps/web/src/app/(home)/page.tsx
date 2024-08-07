import Image from 'next/image'
import styles from './page.module.css'
import RegisterComp from '@/components/register'
import LoginComp from '@/components/login'

export default function Home() {
  return (
    <div>
      <LoginComp/>
    </div>
  )
}
