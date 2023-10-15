"use client";
import { useSession} from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  const {status, data: session} = useSession();

  

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === "authenticated" &&
      <div>
        {session.user!.name}
        <Link href="/api/auth/signout" className="ml-3"><button className="btn btn-secondary">Sign out</button></Link>
      </div>}
      {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar