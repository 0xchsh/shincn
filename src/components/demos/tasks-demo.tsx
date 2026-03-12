"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  DotsThree,
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretDoubleRight,
  Circle,
  CheckCircle,
  Timer,
  XCircle,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Minus,
  Funnel,
  SlidersHorizontal,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

type TaskStatus = "Todo" | "In Progress" | "Done" | "Backlog" | "Canceled"
type TaskPriority = "Low" | "Medium" | "High"
type TaskType = "Bug" | "Feature" | "Documentation"

interface Task {
  id: string
  type: TaskType
  title: string
  status: TaskStatus
  priority: TaskPriority
}

const tasks: Task[] = [
  {
    id: "TASK-8782",
    type: "Documentation",
    title: "You can't compress the program without quantizing the open-source SSD pixel!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7878",
    type: "Bug",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-7839",
    type: "Feature",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5562",
    type: "Documentation",
    title: "The SAS interface is down, bypass the open-source SAS bus so we can index the SAS bandwidth!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-8686",
    type: "Bug",
    title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    id: "TASK-1280",
    type: "Feature",
    title: "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-7262",
    type: "Documentation",
    title: "The UTF8 application is down, parse the neural bandwidth so we can get the USB bus!",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-1138",
    type: "Feature",
    title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7184",
    type: "Bug",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "TASK-5160",
    type: "Documentation",
    title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "In Progress",
    priority: "High",
  },
]

function StatusIcon({ status }: { status: TaskStatus }) {
  switch (status) {
    case "Todo":
      return <Circle className="h-4 w-4 text-muted-foreground" />
    case "In Progress":
      return <Timer className="h-4 w-4 text-muted-foreground" />
    case "Done":
      return <CheckCircle className="h-4 w-4 text-muted-foreground" />
    case "Canceled":
      return <XCircle className="h-4 w-4 text-muted-foreground" />
    case "Backlog":
      return <Circle className="h-4 w-4 text-muted-foreground/50" />
  }
}

function PriorityIcon({ priority }: { priority: TaskPriority }) {
  switch (priority) {
    case "High":
      return <ArrowUp className="h-4 w-4 text-muted-foreground" />
    case "Medium":
      return <ArrowRight className="h-4 w-4 text-muted-foreground" />
    case "Low":
      return <ArrowDown className="h-4 w-4 text-muted-foreground" />
  }
}

export function TasksDemo() {
  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Filter tasks..."
              className="h-8 w-[150px] lg:w-[250px]"
            />
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <Funnel className="mr-2 h-4 w-4" />
              Status
            </Button>
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <Funnel className="mr-2 h-4 w-4" />
              Priority
            </Button>
          </div>
          <Button variant="outline" size="sm" className="ml-auto h-8">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            View
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 w-[40px] px-4 text-left align-middle">
                  <Checkbox />
                </th>
                <th className="h-12 w-[100px] px-4 text-left align-middle font-medium text-muted-foreground">
                  Task
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Title
                </th>
                <th className="h-12 w-[100px] px-4 text-left align-middle font-medium text-muted-foreground">
                  Status
                </th>
                <th className="h-12 w-[100px] px-4 text-left align-middle font-medium text-muted-foreground">
                  Priority
                </th>
                <th className="h-12 w-[40px] px-4 text-left align-middle font-medium text-muted-foreground">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle">
                    <Checkbox />
                  </td>
                  <td className="p-4 align-middle font-medium">{task.id}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{task.type}</Badge>
                      <span className="max-w-[300px] truncate font-medium">
                        {task.title}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex w-[100px] items-center">
                      <StatusIcon status={task.status} />
                      <span className="ml-2">{task.status}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center">
                      <PriorityIcon priority={task.priority} />
                      <span className="ml-2">{task.priority}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <DotsThree className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between px-2">
          <div className="flex-1 text-sm text-muted-foreground">
            0 of 100 row(s) selected.
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">Rows per page</p>
              <Button variant="outline" size="sm" className="h-8 w-[70px]">
                10
              </Button>
            </div>
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page 1 of 10
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden h-8 w-8 p-0 lg:flex"
                disabled
              >
                <CaretDoubleLeft className="h-4 w-4" />
                <span className="sr-only">Go to first page</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                disabled
              >
                <CaretLeft className="h-4 w-4" />
                <span className="sr-only">Go to previous page</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <CaretRight className="h-4 w-4" />
                <span className="sr-only">Go to next page</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden h-8 w-8 p-0 lg:flex"
              >
                <CaretDoubleRight className="h-4 w-4" />
                <span className="sr-only">Go to last page</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
