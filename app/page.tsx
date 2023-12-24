import { SignInButton, UserButton } from '@clerk/nextjs'
import UserPostsWidget from './features/UserPosts'
import Button from './features/components/Button'
import CreatePost from './features/components/Modal'

export default function Home() {
  return (
    <main className="mx-auto lg:max-w-4xl max-w-sm flex flex-col min-h-screen">

      <div className='mt-20 flex flex-col gap-3'>
        <h1 className='text-4xl text-white text-center'>
          Stop getting swindled online!
        </h1>
        <p className='text-center font-light mb-6'>A site to expose scammy businesses & protect customer interests</p>
        <CreatePost />

        <SignInButton mode='modal'>
          <Button>Sign in</Button>
        </SignInButton>
        <UserButton />
        <UserPostsWidget />
      </div>
    </main>
  )
}
