"use server";
import Image from "next/image";
import links from '@/config/links.json'
import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold">Hal2</h1>
      <div className="flex flex-col mt-12 justify-start items-center">
        {links.map((x, i) => (
          <Link className="w-96 mt-4 border rounded p-4 border-gray-500 hover:bg-indigo-950" href={x.url} key={i} >
            <p className="font-bold ">{x.name}</p>
            <p className="text-slate-400 text-sm">{x.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
