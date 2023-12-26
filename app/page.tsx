import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import UserPostsWidget from './features/UserPosts'
import Button from './features/components/Button'
import CreatePost from './features/components/Modal'
import { currentUser } from '@clerk/nextjs'

export default async function Home() {
  const user = await currentUser()
  return (
    <main className="mx-auto lg:max-w-4xl max-w-sm flex flex-col min-h-screen">

      <div className='mt-20 flex flex-col gap-3'>
        <h1 className='text-4xl text-white text-center'>
          Stop getting swindled online!
        </h1>
        <p className='text-center font-light mb-6'>A site to expose scammy businesses & protect customer interests</p>
        <CreatePost />

        <SignedIn>
          You're logged in as {user?.username}*
        </SignedIn>

        <SignedOut>
          <SignInButton mode='modal'>
            <Button>Got<span className='font-bold tracking-widest mx-2 text-red-500'>scammed</span>
              today ?</Button>
          </SignInButton>
        </SignedOut>

        <UserPostsWidget />
      </div>
    </main>
  )
}
