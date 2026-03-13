"use client"

import Link from "next/link"
import * as React from "react"
import {
  ArrowRight,
  Bell,
  CaretUpDown,
  Check,
  CopySimple,
  CreditCard,
  Envelope,
  GearSix,
  Globe,
  MagnifyingGlass,
  PaperPlaneTilt,
  Star,
  User,
} from "@phosphor-icons/react"
import { DocsHeader } from "@/components/docs/docs-header"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { DashboardDemo } from "@/components/demos/dashboard-demo"
import { TasksDemo } from "@/components/demos/tasks-demo"
import { PlaygroundDemo } from "@/components/demos/playground-demo"
import { AuthenticationDemo } from "@/components/demos/authentication-demo"

function PaymentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          All transactions are secure and encrypted
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="John Doe" />
          </div>
          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            <div className="col-span-2 space-y-2 max-sm:col-span-1">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-cvv">CVV</Label>
              <Input id="card-cvv" placeholder="123" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Enter a 16-digit number.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>Month</Label>
              <Select defaultValue="">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select defaultValue="">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {[2026, 2027, 2028, 2029].map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="text-sm font-medium">Billing Address</p>
            <p className="text-xs text-muted-foreground">
              The billing address associated with your payment method
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="same-address" defaultChecked />
            <Label htmlFor="same-address" className="text-sm">
              Same as shipping address
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              placeholder="Add any additional comments"
              className="min-h-[60px]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Submit</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  )
}

function TeamCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback className="text-[10px]">CH</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback className="text-[10px]">JD</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback className="text-[10px]">AK</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="text-center">
          <p className="text-sm font-medium">No Team Members</p>
          <p className="text-xs text-muted-foreground">
            Invite your team to collaborate on this project.
          </p>
        </div>
        <Button variant="outline" size="sm">
          <User data-icon="inline-start" className="size-3.5" />
          Invite Members
        </Button>
      </CardContent>
    </Card>
  )
}

function AuthCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <Globe className="size-4 text-muted-foreground" />
          <span className="flex-1 text-sm text-muted-foreground">
            https://
          </span>
          <Star className="size-4 text-muted-foreground" />
        </div>
        <div className="rounded-lg border p-3">
          <p className="text-sm font-medium">Two-factor authentication</p>
          <p className="text-xs text-muted-foreground">
            Verify by email or phone number.
          </p>
          <div className="mt-2 flex justify-end">
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-2">
            <Check className="size-4 text-emerald-500" />
            <span className="text-sm">Your profile has been verified.</span>
          </div>
          <ArrowRight className="size-4 text-muted-foreground" />
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Appearance Settings
        </p>
      </CardContent>
    </Card>
  )
}

function ChatCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Syncing
          </Badge>
          <Badge variant="outline" className="gap-1">
            <span className="size-1.5 rounded-full bg-amber-500" />
            Updating
          </Badge>
          <Badge variant="outline" className="gap-1">
            <span className="size-1.5 rounded-full bg-muted-foreground" />
            Loading
          </Badge>
        </div>
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <span className="text-muted-foreground">+</span>
          <span className="flex-1 text-sm text-muted-foreground">
            Send a message...
          </span>
          <PaperPlaneTilt className="size-4 text-muted-foreground" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Price Range</p>
          </div>
          <p className="text-xs text-muted-foreground">
            Set your budget range ($200 – 800).
          </p>
          <Slider defaultValue={[50]} className="mt-2" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <MagnifyingGlass className="size-4 text-muted-foreground" />
          <span className="flex-1 text-sm text-muted-foreground">
            Search...
          </span>
          <span className="text-xs text-muted-foreground">12 results</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <span className="flex-1 text-sm text-muted-foreground">
            https:// example.com
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <span className="flex-1 text-sm text-muted-foreground">
            Ask, Search or Chat...
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">+</span>
            <span className="text-sm">Auto</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">52% used</span>
            <PaperPlaneTilt className="size-4 text-primary" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border px-3 py-2">
          <span className="text-sm text-muted-foreground">@shadcn</span>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  )
}

function SettingsCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Button variant="outline" size="sm" className="gap-1">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Add context
        </Button>
        <div className="rounded-lg border p-3">
          <p className="text-sm text-muted-foreground">
            Ask, search, or make anything...
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Auto</span>
          </div>
          <div className="flex items-center gap-1">
            <GearSix className="size-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">All Sources</span>
          </div>
          <div className="flex-1" />
          <PaperPlaneTilt className="size-4 text-primary" />
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm">
            Archive
          </Button>
          <Button variant="outline" size="sm">
            Report
          </Button>
          <Button variant="outline" size="sm">
            Snooze
          </Button>
          <Button variant="ghost" size="icon-sm">
            ···
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </Label>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="icon-sm">
            ←
          </Button>
          <Button variant="ghost" size="icon-sm">
            →
          </Button>
          <div className="flex-1" />
          <Badge variant="outline" className="gap-1">
            <span className="size-1.5 rounded-full bg-primary" />
            Copilot
          </Badge>
          <CaretUpDown className="size-4 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  )
}

function EnvironmentCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div>
          <p className="text-sm font-medium">Compute Environment</p>
          <p className="text-xs text-muted-foreground">
            Select the compute environment for your cluster.
          </p>
        </div>
        <RadioGroup defaultValue="k8s" className="gap-2">
          <div className="flex items-start gap-3 rounded-lg border p-3">
            <RadioGroupItem value="k8s" id="env-k8s" className="mt-0.5" />
            <div className="flex-1">
              <Label htmlFor="env-k8s" className="font-medium">
                Kubernetes
              </Label>
              <p className="text-xs text-muted-foreground">
                Run GPU workloads on a K8s configured cluster. This is the
                default.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border p-3">
            <RadioGroupItem value="vm" id="env-vm" className="mt-0.5" />
            <div className="flex-1">
              <Label htmlFor="env-vm" className="font-medium">
                Virtual Machine
              </Label>
              <p className="text-xs text-muted-foreground">
                Access a VM configured cluster to run workloads. (Coming soon)
              </p>
            </div>
          </div>
        </RadioGroup>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Number of GPUs</p>
            <p className="text-xs text-muted-foreground">
              You can add more later.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex size-8 items-center justify-center rounded-md border text-sm">
              8
            </div>
            <Button variant="outline" size="icon-sm">
              −
            </Button>
            <Button variant="outline" size="icon-sm">
              +
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Wallpaper Tinting</p>
            <p className="text-xs text-muted-foreground">
              Allow the wallpaper to be tinted.
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  )
}

function SurveyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How did you hear about us?</CardTitle>
        <CardDescription>
          Select the option that best describes how you...
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge className="gap-1">
            <Check className="size-3" />
            Social Media
          </Badge>
          <Badge className="gap-1">
            <Check className="size-3" />
            Search Engine
          </Badge>
          <Badge variant="outline">Referral</Badge>
          <Badge variant="outline">Other</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function LoadingCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 pt-6 pb-6">
        <div className="size-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
        <div className="text-center">
          <p className="text-sm font-medium">Processing your request</p>
          <p className="text-xs text-muted-foreground">
            Please wait while we process your request. Do not refresh the page.
          </p>
        </div>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </CardContent>
    </Card>
  )
}

const BASE_COLORS = [
  { name: "Neutral", value: "neutral", swatch: "#a3a3a3", primary: "oklch(0.205 0 0)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Slate", value: "slate", swatch: "#94a3b8", primary: "oklch(0.205 0.015 264)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Stone", value: "stone", swatch: "#a8a29e", primary: "oklch(0.216 0.006 56)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Zinc", value: "zinc", swatch: "#a1a1aa", primary: "oklch(0.21 0.006 285)", primaryFg: "oklch(0.985 0.002 0)" },
  { name: "Gray", value: "gray", swatch: "#9ca3af", primary: "oklch(0.21 0.011 264)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Red", value: "red", swatch: "#ef4444", primary: "oklch(0.637 0.237 25.33)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Orange", value: "orange", swatch: "#f97316", primary: "oklch(0.705 0.191 47.6)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Amber", value: "amber", swatch: "#f59e0b", primary: "oklch(0.769 0.188 70.08)", primaryFg: "oklch(0.205 0 0)" },
  { name: "Yellow", value: "yellow", swatch: "#eab308", primary: "oklch(0.795 0.184 86.05)", primaryFg: "oklch(0.205 0 0)" },
  { name: "Lime", value: "lime", swatch: "#84cc16", primary: "oklch(0.768 0.189 130.85)", primaryFg: "oklch(0.205 0 0)" },
  { name: "Green", value: "green", swatch: "#22c55e", primary: "oklch(0.723 0.191 149.58)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Emerald", value: "emerald", swatch: "#10b981", primary: "oklch(0.696 0.17 162.48)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Teal", value: "teal", swatch: "#14b8a6", primary: "oklch(0.697 0.146 182.5)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Cyan", value: "cyan", swatch: "#06b6d4", primary: "oklch(0.715 0.143 202.92)", primaryFg: "oklch(0.205 0 0)" },
  { name: "Sky", value: "sky", swatch: "#0ea5e9", primary: "oklch(0.685 0.169 222.98)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Blue", value: "blue", swatch: "#3b82f6", primary: "oklch(0.623 0.214 259.53)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Indigo", value: "indigo", swatch: "#6366f1", primary: "oklch(0.585 0.233 277.12)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Violet", value: "violet", swatch: "#8b5cf6", primary: "oklch(0.606 0.25 292.72)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Purple", value: "purple", swatch: "#a855f7", primary: "oklch(0.627 0.265 303.9)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Fuchsia", value: "fuchsia", swatch: "#d946ef", primary: "oklch(0.667 0.295 322.15)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Pink", value: "pink", swatch: "#ec4899", primary: "oklch(0.656 0.241 354.31)", primaryFg: "oklch(0.985 0 0)" },
  { name: "Rose", value: "rose", swatch: "#f43f5e", primary: "oklch(0.645 0.246 16.44)", primaryFg: "oklch(0.985 0 0)" },
] as const

function BaseColorPicker({
  value,
  onValueChange,
}: {
  value: string
  onValueChange: (value: string) => void
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx shadcn init --registry https://ui.ch.sh")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <Select value={value} onValueChange={(v) => { if (v) onValueChange(v) }}>
        <SelectTrigger className="h-8 w-[130px] text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {BASE_COLORS.map((color) => (
            <SelectItem key={color.value} value={color.value}>
              <span
                className="size-3 shrink-0 rounded-full border"
                style={{ backgroundColor: color.swatch }}
              />
              {color.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy init command"}
      >
        {copied ? (
          <Check className="size-3.5 text-emerald-500" />
        ) : (
          <CopySimple className="size-3.5" />
        )}
      </Button>
    </div>
  )
}

function ExamplesShowcase() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="space-y-4">
        <PaymentCard />
      </div>
      <div className="space-y-4">
        <TeamCard />
        <AuthCard />
        <EnvironmentCard />
      </div>
      <div className="space-y-4">
        <SettingsCard />
        <SurveyCard />
        <LoadingCard />
      </div>
    </div>
  )
}

function ShowcaseTabs() {
  const [activeTab, setActiveTab] = React.useState("examples")
  const [baseColor, setBaseColor] = React.useState("neutral")

  const tabs = [
    { id: "examples", label: "Examples" },
    { id: "dashboard", label: "Dashboard" },
    { id: "tasks", label: "Tasks" },
    { id: "playground", label: "Playground" },
    { id: "authentication", label: "Authentication" },
  ]

  const selectedColor = BASE_COLORS.find((c) => c.value === baseColor)
  const colorOverrides = selectedColor
    ? ({
        "--primary": selectedColor.primary,
        "--primary-foreground": selectedColor.primaryFg,
        "--ring": selectedColor.primary,
      } as React.CSSProperties)
    : undefined

  return (
    <div className="space-y-4">
      {/* Tab bar + color picker */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="shrink-0">
          <BaseColorPicker value={baseColor} onValueChange={setBaseColor} />
        </div>
      </div>

      {/* Tab content */}
      <div
        className="rounded-xl border bg-background p-4"
        style={colorOverrides}
      >
        {activeTab === "examples" && <ExamplesShowcase />}
        {activeTab === "dashboard" && <DashboardDemo />}
        {activeTab === "tasks" && <TasksDemo />}
        {activeTab === "playground" && <PlaygroundDemo />}
        {activeTab === "authentication" && <AuthenticationDemo />}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <DocsHeader />

      {/* Hero */}
      <section className="flex flex-col items-center px-4 pt-16 pb-12 text-center sm:pt-24 sm:pb-16">
        <Link
          href="https://github.com/0xchsh/shincn"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6"
        >
          <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-xs leading-none">
            shincn/registry — open source
            <ArrowRight className="size-3" />
          </Badge>
        </Link>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          ch.sh Brand Guidelines
        </h1>

        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          A fork of shadcn for my own personal brand and flavor of software.
          Skeuomorphic buttons, SF Pro Rounded, and Phosphor Icons.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/docs"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Get Started
          </Link>
          <Link
            href="/docs/components/button"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View Components
          </Link>
        </div>
      </section>

      {/* Tabs + Color picker bar */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <ShowcaseTabs />
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
