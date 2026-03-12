"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendUp,
  TrendDown,
  MagnifyingGlass,
  Users,
  CurrencyDollar,
  ChartLineUp,
  UserCircle,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

const salesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
  },
]

export function DashboardDemo() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="border-b">
        <div className="flex h-14 items-center gap-4 px-6">
          <span className="text-sm font-semibold tracking-tight">Acme Inc</span>
          <Separator orientation="vertical" className="h-5" />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-xs font-medium">
              Overview
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-medium text-muted-foreground"
            >
              Customers
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-medium text-muted-foreground"
            >
              Products
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-medium text-muted-foreground"
            >
              Settings
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlass className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="h-8 w-48 pl-8 text-xs"
              />
            </div>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview" className="text-xs">
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" className="text-xs">
                Reports
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Metric cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Revenue */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <CurrencyDollar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tabular-nums">$1,250.00</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="gap-1 rounded-full px-1.5 py-0 text-xs text-emerald-600"
                >
                  <TrendUp className="h-3 w-3" />
                  +12.5%
                </Badge>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>

          {/* New Customers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                New Customers
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tabular-nums">1,234</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="gap-1 rounded-full px-1.5 py-0 text-xs text-rose-600"
                >
                  <TrendDown className="h-3 w-3" />
                  -20%
                </Badge>
                <span>from last period</span>
              </div>
            </CardContent>
          </Card>

          {/* Active Accounts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Accounts
              </CardTitle>
              <UserCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tabular-nums">45,678</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="gap-1 rounded-full px-1.5 py-0 text-xs text-emerald-600"
                >
                  <TrendUp className="h-3 w-3" />
                  +12.5%
                </Badge>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>

          {/* Growth Rate */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Growth Rate
              </CardTitle>
              <ChartLineUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tabular-nums">4.5%</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="gap-1 rounded-full px-1.5 py-0 text-xs text-emerald-600"
                >
                  <TrendUp className="h-3 w-3" />
                  +4.5%
                </Badge>
                <span>steady increase</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart + Table row */}
        <div className="grid gap-4 lg:grid-cols-7">
          {/* Area chart placeholder */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Total Visitors</CardTitle>
              <CardDescription className="text-xs">
                Showing total visitors for the last 3 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[260px] w-full">
                <svg
                  viewBox="0 0 600 260"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={52 * i + 10}
                      x2="600"
                      y2={52 * i + 10}
                      stroke="currentColor"
                      strokeOpacity="0.07"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Area fill */}
                  <path
                    d="M 0 220 C 30 210, 60 190, 90 180 C 120 170, 140 160, 170 140 C 200 120, 220 130, 250 110 C 280 90, 300 100, 330 80 C 360 60, 380 70, 410 50 C 440 30, 460 45, 490 55 C 520 65, 550 40, 580 30 L 600 25 L 600 260 L 0 260 Z"
                    className="fill-primary/10"
                  />
                  {/* Line */}
                  <path
                    d="M 0 220 C 30 210, 60 190, 90 180 C 120 170, 140 160, 170 140 C 200 120, 220 130, 250 110 C 280 90, 300 100, 330 80 C 360 60, 380 70, 410 50 C 440 30, 460 45, 490 55 C 520 65, 550 40, 580 30 L 600 25"
                    fill="none"
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendUp className="h-3.5 w-3.5 text-emerald-600" />
                Trending up by 5.2% this month
              </div>
            </CardFooter>
          </Card>

          {/* Recent Sales table */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription className="text-xs">
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {salesData.map((sale) => (
                  <div
                    key={sale.email}
                    className="flex items-center gap-3"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-[10px]">
                        {sale.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-0.5 overflow-hidden">
                      <p className="truncate text-sm font-medium leading-none">
                        {sale.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">
                      {sale.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data table card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription className="text-xs">
              A list of recent sales transactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">Customer</th>
                    <th className="pb-3 pr-4 font-medium">Email</th>
                    <th className="pb-3 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale) => (
                    <tr
                      key={sale.email}
                      className="border-b last:border-0"
                    >
                      <td className="py-3 pr-4 font-medium">{sale.name}</td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {sale.email}
                      </td>
                      <td className="py-3 text-right tabular-nums">
                        {sale.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
