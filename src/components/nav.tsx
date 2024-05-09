import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

type Props = {}

function nav({}: Props) {
  return (
    <div className='w-full h-[15vh] flex flex-col fixed overflow-hidden top-0 bg-slate-500 z-10 text-white pl-4 p-2'>
          <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    <Link href={"/"}>Home</Link>
    <Link href={"/"}>Submit Report</Link>
    <Link href={"/"}>Browse Reports</Link>
    <Link href={"/admin"}>Admin</Link>
    </div>
  )
}

export default nav