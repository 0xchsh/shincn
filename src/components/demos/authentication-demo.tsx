"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Command, GithubLogo } from "@phosphor-icons/react"

export function AuthenticationDemo() {
  return (
    <div className={cn("grid min-h-[600px] grid-cols-1 md:grid-cols-2")}>
      {/* Left panel */}
      <div className="relative hidden bg-foreground text-background md:flex">
        <div className="flex h-full w-full flex-col justify-between p-10">
          <div className="flex items-center gap-2 text-lg font-medium">
            <Command className="size-5" weight="bold" />
            shincn
          </div>
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Create Account</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            <GithubLogo className="size-4" />
            GitHub
          </Button>

          <p className="px-4 text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="#"
              className="underline underline-offset-4 decoration-dotted decoration-muted-foreground/50 hover:text-foreground"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline underline-offset-4 decoration-dotted decoration-muted-foreground/50 hover:text-foreground"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
