import { signIn } from "next-auth/react"
import { useState } from "react"
import Loader from "./loader"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "./button"

export default function ButtonProvider({ provider, ...props }: { provider: 'google' | 'twitter' | 'tiktok' }) {
  const [loading, setLoading] = useState(false)

  const handleLoginWithProvider = async (provider: string) => {
    setLoading(true)
    await signIn(provider, { redirectTo: '/' })
    setLoading(false)
  }

  return (
    <Button onClick={() => handleLoginWithProvider(provider)} {...props}>
      {
        loading ? (
          <Loader />
        ) : provider === 'google' ? (
          <>
            <Icon icon="logos:google-icon" width="256" height="262" />
            Google
          </>
        ) : provider === 'twitter' ? (
          <>
            <Icon icon="ri:twitter-x-fill" width="24" height="24" />
            Twitter
          </>
        ) : provider === 'tiktok' && (
          <>
            <Icon icon="logos:tiktok-icon" width="256" height="290" />
            Tiktok
          </>
        )
      }
    </Button>
  )
}
