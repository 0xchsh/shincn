"use client"

import Link from "next/link"
import { ArrowRight, Bell, CreditCard, Envelope, User, Users, GearSix } from "@phosphor-icons/react"
import { DocsHeader } from "@/components/docs/docs-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

function PaymentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>Add a new payment method to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="Name on card" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="card-number">Card number</Label>
            <Input id="card-number" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="card-month">Month</Label>
              <Select defaultValue="01">
                <SelectTrigger className="w-full" id="card-month">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  <SelectItem value="03">March</SelectItem>
                  <SelectItem value="04">April</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="card-year">Year</Label>
              <Select defaultValue="2026">
                <SelectTrigger className="w-full" id="card-year">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="card-cvc">CVC</Label>
              <Input id="card-cvc" placeholder="123" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CreditCard data-icon="inline-start" className="size-4" />
          <span>Add payment method</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function TeamCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite your team to collaborate.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[
            { initials: "CH", name: "Carlos Hinojosa", email: "carlos@ch.sh", role: "Owner" },
            { initials: "JD", name: "Jane Doe", email: "jane@example.com", role: "Editor" },
            { initials: "AK", name: "Alex Kim", email: "alex@example.com", role: "Viewer" },
          ].map((member) => (
            <div key={member.email} className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback className="text-[10px]">{member.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
              <Badge variant="secondary">{member.role}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 w-full">
          <AvatarGroup>
            <Avatar size="sm"><AvatarFallback className="text-[10px]">CH</AvatarFallback></Avatar>
            <Avatar size="sm"><AvatarFallback className="text-[10px]">JD</AvatarFallback></Avatar>
            <Avatar size="sm"><AvatarFallback className="text-[10px]">AK</AvatarFallback></Avatar>
          </AvatarGroup>
          <span className="text-xs text-muted-foreground">3 members</span>
        </div>
      </CardFooter>
    </Card>
  )
}

function FormControlsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Checkbox id="pref-emails" defaultChecked />
            <Label htmlFor="pref-emails">Marketing emails</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="pref-updates" defaultChecked />
            <Label htmlFor="pref-updates">Product updates</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="pref-security" />
            <Label htmlFor="pref-security">Security alerts</Label>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Compact mode</Label>
            <Switch id="dark-mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sounds">Notification sounds</Label>
            <Switch id="sounds" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose how you want to be notified.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="all" className="gap-3">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="all" id="notify-all" />
            <div>
              <Label htmlFor="notify-all">All notifications</Label>
              <p className="text-xs text-muted-foreground">Email, push, and in-app.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="important" id="notify-important" />
            <div>
              <Label htmlFor="notify-important">Important only</Label>
              <p className="text-xs text-muted-foreground">Mentions and direct messages.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="none" id="notify-none" />
            <div>
              <Label htmlFor="notify-none">Nothing</Label>
              <p className="text-xs text-muted-foreground">Turn off all notifications.</p>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Bell data-icon="inline-start" className="size-4" />
          <span>Update preferences</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function AccountCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Update your account settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="acct-name">Display name</Label>
            <Input id="acct-name" defaultValue="Carlos Hinojosa" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="acct-email">Email</Label>
            <Input id="acct-email" type="email" defaultValue="carlos@ch.sh" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="acct-role">Role</Label>
            <Select defaultValue="admin">
              <SelectTrigger className="w-full" id="acct-role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <User data-icon="inline-start" className="size-4" />
          <span>Save changes</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <DocsHeader />

      {/* Hero */}
      <section className="flex flex-col items-center px-4 pt-20 pb-16 text-center">
        <Link
          href="https://github.com/0xchsh/shincn"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6"
        >
          <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs">
            shincn/registry — open source
            <ArrowRight className="size-3" />
          </Badge>
        </Link>

        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Your Design System, Everywhere
        </h1>

        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          A portable component registry built on shadcn/ui. Neutral palette,
          Phosphor icons, SF Pro Rounded, restrained radii, purposeful motion.
          Install once, use in every project.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Button size="lg" render={<Link href="/docs" />}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/docs/components/button" />}>
            View Components
          </Button>
        </div>
      </section>

      {/* Component showcase */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PaymentCard />
          <TeamCard />
          <FormControlsCard />
          <NotificationsCard />
          <AccountCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://ch.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-dotted decoration-muted-foreground/50"
            >
              ch.sh
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/0xchsh/shincn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-dotted decoration-muted-foreground/50"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
