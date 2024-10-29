"use client";

import Image from "next/image";
import Link from 'next/link';
import Input from "../components/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center" style={{ marginTop: '-25vh' }}>
      {/* Exit Button */}
      <Link href="/chat" className="fixed top-4 right-4 md:top-6 md:right-6 bg-neutral-200 hover:bg-neutral-300 text-black p-2 rounded-full">
        X
      </Link>

      {/* Solve Section Positioned Higher */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-black mb-6">Study</h1>
        <label htmlFor="options" className="block text-neutral-400">Add your coursework to create a study guide</label>
      </div>

      {/* Input Component */}
      <Input />
    </div>
  );
}
