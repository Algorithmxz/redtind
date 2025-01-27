"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoadingPage() {
  const router = useRouter()

  useEffect(() => {
    const redirect = async () => {
      try {
        const res = await fetch('/api/redirect')
        const { url } = await res.json()
        router.push(url)
      } catch (error) {
        console.error('Redirect failed:', error)
        // Optional: Add fallback URL here if needed
      }
    }

    const redirectTimeout = setTimeout(redirect, 2000)
    return () => clearTimeout(redirectTimeout)
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-fade-in">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tinder_(app)-White-Logo.wine-pmEswtDVKRetMDZAf2NR8NF1f9heBO.png"
          alt="Logo"
          width={400}
          height={133}
          priority
          className="animate-pulse"
        />
      </div>
    </main>
  )
}

