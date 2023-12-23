import Button from './features/components/Button'
import DialogComponent from './features/components/Dialog'
import MyModal from './features/components/Modal'

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl flex items-center flex-col min-h-screen">

      <div className='mt-24 flex flex-col gap-8'>
        <p className='text-4xl text-white text-center'>
          Stop getting swindled online!
        </p>
        <MyModal />
      </div>
    </main>
  )
}
