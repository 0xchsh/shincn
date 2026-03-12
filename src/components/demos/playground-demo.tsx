"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CaretUpDown,
  ShareNetwork,
  Code,
  FloppyDisk,
  ClockCounterClockwise,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function PlaygroundDemo() {
  const [temperature, setTemperature] = React.useState(0.56)
  const [maxLength, setMaxLength] = React.useState(256)
  const [topP, setTopP] = React.useState(0.9)

  return (
    <div className="flex flex-col gap-6">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Load a preset..." />
              <CaretUpDown className="ml-auto size-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grammatical">
                Grammatical Standard English
              </SelectItem>
              <SelectItem value="summarize">Summarize for a 2nd grader</SelectItem>
              <SelectItem value="keywords">Parse unstructured data</SelectItem>
              <SelectItem value="translate">Translation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <FloppyDisk className="size-4" />
            Save
          </Button>
          <Button variant="secondary" size="sm">
            <Code className="size-4" />
            View code
          </Button>
          <Button variant="secondary" size="sm">
            <ShareNetwork className="size-4" />
            Share
          </Button>
        </div>
      </div>

      <Separator />

      {/* Main Area */}
      <div className="flex gap-6">
        {/* Left Column — Textarea */}
        <div className="flex flex-1 flex-col gap-4" style={{ flex: "7 1 0%" }}>
          <Textarea
            placeholder="Write a tagline for an ice cream shop"
            className="min-h-[300px] resize-none text-sm"
          />
          <div className="flex items-center justify-between">
            <Button>Submit</Button>
            <button className="inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:underline">
              <ClockCounterClockwise className="size-4" />
              Show history
            </button>
          </div>
        </div>

        {/* Right Sidebar — Settings */}
        <div
          className="flex flex-col gap-6"
          style={{ flex: "3 1 0%" }}
        >
          {/* Mode */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Mode</Label>
            <p className="text-xs text-muted-foreground">
              Select the interface mode for the playground.
            </p>
            <Tabs defaultValue="complete">
              <TabsList className="w-full">
                <TabsTrigger value="complete" className="flex-1">
                  Complete
                </TabsTrigger>
                <TabsTrigger value="insert" className="flex-1">
                  Insert
                </TabsTrigger>
                <TabsTrigger value="edit" className="flex-1">
                  Edit
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Model */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Model</Label>
            <p className="text-xs text-muted-foreground">
              Select the model which will generate the completion.
            </p>
            <Select defaultValue="text-davinci-003">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-davinci-003">
                  text-davinci-003
                </SelectItem>
                <SelectItem value="text-curie-001">text-curie-001</SelectItem>
                <SelectItem value="text-babbage-001">
                  text-babbage-001
                </SelectItem>
                <SelectItem value="text-ada-001">text-ada-001</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Temperature */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Temperature</Label>
              <span className="text-sm text-muted-foreground">
                {temperature}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Controls randomness: lowering results in less random completions.
            </p>
            <Slider
              defaultValue={[temperature]}
              onValueChange={(v) => setTemperature(Array.isArray(v) ? v[0] : v)}
              min={0}
              max={1}
              step={0.01}
            />
          </div>

          {/* Maximum Length */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Maximum Length</Label>
              <span className="text-sm text-muted-foreground">
                {maxLength}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              The maximum number of tokens to generate in the completion.
            </p>
            <Slider
              defaultValue={[maxLength]}
              onValueChange={(v) => setMaxLength(Array.isArray(v) ? v[0] : v)}
              min={0}
              max={4096}
              step={1}
            />
          </div>

          {/* Top P */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Top P</Label>
              <span className="text-sm text-muted-foreground">
                {topP}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Controls diversity via nucleus sampling: 0.5 means half of all
              likelihood-weighted options are considered.
            </p>
            <Slider
              defaultValue={[topP]}
              onValueChange={(v) => setTopP(Array.isArray(v) ? v[0] : v)}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
