import Image from 'next/image'
import Button from './features/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <p className='text-4xl text-white'>
        Exposing scammy businesses & people online
      </p>

      <Button>Who scammed you today ?</Button>
    </main>
  )
}
