'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import ROUTES from "@/constants/routes"

const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"

    const handleSignInFunction = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.SIGN_IN,
                redirect: false
            });
        } catch (error) {
            console.log(error)
            toast("Something went wrong", {
                description: new Date().toLocaleString(),
                action: {
                    label: "Hide",
                    onClick: () => {}
                }
            })
        }
    }

  return (
    <div className="mt-10 flex flex-wrap gap-2.5" >

        <Button className={buttonClass} onClick={() => handleSignInFunction("github")} >
            <Image
                src="/icons/github.svg"
                alt="Github logo"
                width={20}
                height={20}
                className="invert-colors mr-2.5 object-contain"
            />
            <span>Log in with GitHub</span>
        </Button>
        <Button className={buttonClass} onClick={() => handleSignInFunction("google")} >
            <Image
                src="/icons/google.svg"
                alt="Google logo"
                width={20}
                height={20}
                className="invert-colors mr-2.5 object-contain"
            />
            <span>Log in with Google</span>
        </Button>


    </div>
  )
}

export default SocialAuthForm