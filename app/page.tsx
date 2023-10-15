import Image from "next/image";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Click here</Link>
      <ProductCard /> */}
      <Image src="https://bit.ly/react-cover" alt="Guide" fill className="object-cover" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" quality={75}/>
    </main>
  )
}
