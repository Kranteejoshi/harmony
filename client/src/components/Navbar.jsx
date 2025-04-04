"use client"

import { useState } from "react"

export default function Navbar() {

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        <span className="hidden md:inline-flex text-foreground font-semibold">
          Harmony
        </span>
      </div>


      <div className="flex items-center gap-2">
        

      </div>
    </header>
  )
}

