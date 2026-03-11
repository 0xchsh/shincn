"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { NativeSelect } from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
} from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  GearSix,
  Trash,
  PencilSimple,
  Copy,
  DotsThree,
  User,
  EnvelopeSimple,
  MagnifyingGlass,
  Plus,
  ArrowRight,
  CheckCircle,
  Warning,
  Info,
  SpinnerGap,
  TextB,
  TextItalic,
  TextUnderline,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  CaretDown,
  Bell,
  House,
  Folder,
  File,
  Star,
  Heart,
  Image,
  Package,
} from "@phosphor-icons/react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function Preview() {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(40);
  const [progressValue] = useState(65);
  const [radioValue, setRadioValue] = useState("comfortable");

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 space-y-10">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">shincn</h1>
        <p className="text-sm text-muted-foreground">
          A portable design system built on shadcn/ui. Neutral palette, Phosphor
          icons, SF Pro Rounded, restrained radii, purposeful motion.
        </p>
      </header>

      <Separator />

      {/* Accordion */}
      <Section title="Accordion">
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the shincn design
              system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It uses CSS transitions with reduced motion support.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Separator />

      {/* Alert */}
      <Section title="Alerts">
        <div className="space-y-3">
          <Alert>
            <Info className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert with a Phosphor icon.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <Warning className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      <Separator />

      {/* Alert Dialog */}
      <Section title="Alert Dialog">
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            Delete account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>

      <Separator />

      {/* Aspect Ratio */}
      <Section title="Aspect Ratio">
        <div className="w-64">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
              <Image className="size-8 text-muted-foreground" />
            </div>
          </AspectRatio>
        </div>
      </Section>

      <Separator />

      {/* Avatar */}
      <Section title="Avatars">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">CS</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Separator />

      {/* Badges */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Separator />

      {/* Breadcrumb */}
      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Section>

      <Separator />

      {/* Buttons */}
      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button disabled>Disabled</Button>
          <Button onClick={simulateLoading} disabled={loading}>
            {loading && <SpinnerGap className="animate-spin" />}
            {loading ? "Saving..." : "Loading state"}
          </Button>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Settings" />
              }
            >
              <GearSix />
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
          <Button>
            Continue <ArrowRight />
          </Button>
          <Button>
            <Plus /> New item
          </Button>
        </div>
      </Section>

      <Separator />

      {/* Cards */}
      <Section title="Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project settings</CardTitle>
              <CardDescription>
                Manage your project configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your project is currently on the free plan. Upgrade for more
                features.
              </p>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Upgrade</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team members</CardTitle>
              <CardDescription>
                Invite collaborators to your project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Alice", "Bob", "Carol"].map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarFallback className="text-xs">
                      {name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">
                      {name.toLowerCase()}@example.com
                    </p>
                  </div>
                  <Badge variant="outline">Member</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Separator />

      {/* Checkbox */}
      <Section title="Checkbox">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              id="terms"
              checked={checked}
              onCheckedChange={(val) => setChecked(val === true)}
            />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check" className="opacity-50">
              Disabled checkbox
            </Label>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Collapsible */}
      <Section title="Collapsible">
        <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
          <div className="flex items-center gap-2">
            <CollapsibleTrigger
              render={<Button variant="outline" size="sm" />}
            >
              <CaretDown
                className={`size-4 transition-transform ${collapsibleOpen ? "rotate-180" : ""}`}
              />
              {collapsibleOpen ? "Hide" : "Show"} 3 items
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="mt-2 space-y-2">
              {["Item A", "Item B", "Item C"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border px-3 py-2 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      <Separator />

      {/* Context Menu */}
      <Section title="Context Menu">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-24 w-full items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <PencilSimple className="size-4" /> Edit
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className="size-4" /> Duplicate
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Trash className="size-4" /> Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Section>

      <Separator />

      {/* Dialog */}
      <Section title="Dialog">
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="Carlos Shin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input
                    id="dialog-email"
                    type="email"
                    defaultValue="carlos@example.com"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Section>

      <Separator />

      {/* Drawer */}
      <Section title="Drawer">
        <Drawer>
          <DrawerTrigger render={<Button variant="outline" />}>
            Open drawer
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 py-2">
              <p className="text-sm text-muted-foreground">
                Drawer content goes here.
              </p>
            </div>
            <DrawerFooter>
              <Button>Save</Button>
              <DrawerClose render={<Button variant="outline" />}>
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Section>

      <Separator />

      {/* Dropdown Menu */}
      <Section title="Dropdown Menu">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            <DotsThree weight="bold" /> Actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <PencilSimple /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy /> Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Separator />

      {/* Empty */}
      <Section title="Empty State">
        <Empty>
          <EmptyMedia>
            <Package className="size-8" />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            Get started by creating your first project.
          </EmptyDescription>
          <Button size="sm">
            <Plus /> New project
          </Button>
        </Empty>
      </Section>

      <Separator />

      {/* Hover Card */}
      <Section title="Hover Card">
        <HoverCard>
          <HoverCardTrigger render={<Button variant="link" />}>
            @carlos
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex gap-3">
              <Avatar className="size-10">
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium">Carlos Shin</p>
                <p className="text-xs text-muted-foreground">
                  Building design systems and writing code.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Section>

      <Separator />

      {/* Input */}
      <Section title="Inputs">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Carlos Shin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="disabled-input">Disabled</Label>
          <Input id="disabled-input" disabled placeholder="Cannot edit" />
        </div>
      </Section>

      <Separator />

      {/* Input Group */}
      <Section title="Input Group">
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>
                <MagnifyingGlass />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>
                <EnvelopeSimple />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="you@example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>
                <CheckCircle />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Section>

      <Separator />

      {/* Input OTP */}
      <Section title="Input OTP">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Section>

      <Separator />

      {/* Kbd */}
      <Section title="Kbd">
        <div className="flex items-center gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <span className="text-sm text-muted-foreground mx-2">or</span>
          <Kbd>Ctrl</Kbd>
          <span className="text-xs text-muted-foreground">+</span>
          <Kbd>Shift</Kbd>
          <span className="text-xs text-muted-foreground">+</span>
          <Kbd>P</Kbd>
        </div>
      </Section>

      <Separator />

      {/* Native Select */}
      <Section title="Native Select">
        <div className="w-56">
          <NativeSelect defaultValue="">
            <option value="" disabled>
              Select a fruit
            </option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
          </NativeSelect>
        </div>
      </Section>

      <Separator />

      {/* Pagination */}
      <Section title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>

      <Separator />

      {/* Popover */}
      <Section title="Popover">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Open popover
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-muted-foreground">
                You have 3 unread messages.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </Section>

      <Separator />

      {/* Progress */}
      <Section title="Progress">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Upload progress</span>
              <span className="text-muted-foreground">{progressValue}%</span>
            </div>
            <Progress value={progressValue}>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Radio Group */}
      <Section title="Radio Group">
        <RadioGroup value={radioValue} onValueChange={setRadioValue}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </Section>

      <Separator />

      {/* Select */}
      <Section title="Select">
        <div className="space-y-2">
          <Label>Timezone</Label>
          <Select>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pst">Pacific Time (PT)</SelectItem>
              <SelectItem value="mst">Mountain Time (MT)</SelectItem>
              <SelectItem value="cst">Central Time (CT)</SelectItem>
              <SelectItem value="est">Eastern Time (ET)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Section>

      <Separator />

      {/* Sheet */}
      <Section title="Sheet">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet title</SheetTitle>
              <SheetDescription>
                This is a sheet panel that slides in from the right.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">Sheet content.</p>
            </div>
          </SheetContent>
        </Sheet>
      </Section>

      <Separator />

      {/* Skeleton */}
      <Section title="Skeleton">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-20 w-full" />
        </div>
      </Section>

      <Separator />

      {/* Slider */}
      <Section title="Slider">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Volume</span>
            <span className="text-muted-foreground">{sliderValue}%</span>
          </div>
          <Slider
            value={sliderValue}
            onValueChange={(val) => setSliderValue(val as number)}
          />
        </div>
      </Section>

      <Separator />

      {/* Spinner */}
      <Section title="Spinner">
        <div className="flex items-center gap-4">
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </Section>

      <Separator />

      {/* Switch */}
      <Section title="Switch">
        <div className="flex items-center gap-3">
          <Switch
            id="notifications"
            checked={switchOn}
            onCheckedChange={setSwitchOn}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      </Section>

      <Separator />

      {/* Table */}
      <Section title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Alice", status: "Active", amount: "$250.00" },
              { name: "Bob", status: "Pending", amount: "$150.00" },
              { name: "Carol", status: "Active", amount: "$350.00" },
            ].map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge variant={row.status === "Active" ? "default" : "outline"}>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Separator />

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p className="text-sm text-muted-foreground">
              Project overview content. This tab shows high-level metrics.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <p className="text-sm text-muted-foreground">
              Analytics content. Charts and data would go here.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <p className="text-sm text-muted-foreground">
              Settings content. Configuration options would go here.
            </p>
          </TabsContent>
        </Tabs>
      </Section>

      <Separator />

      {/* Toggle */}
      <Section title="Toggle">
        <div className="flex items-center gap-2">
          <Toggle aria-label="Toggle bold">
            <TextB className="size-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <TextItalic className="size-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <TextUnderline className="size-4" />
          </Toggle>
        </div>
      </Section>

      <Separator />

      {/* Toggle Group */}
      <Section title="Toggle Group">
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <TextAlignLeft className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <TextAlignCenter className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <TextAlignRight className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </Section>

      <Separator />

      {/* Tooltip */}
      <Section title="Tooltip">
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" />}>
              <Bell />
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Settings" />}>
              <GearSix />
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Favorites" />}>
              <Star />
            </TooltipTrigger>
            <TooltipContent>Favorites</TooltipContent>
          </Tooltip>
        </div>
      </Section>

      <Separator />

      {/* Typography */}
      <Section title="Typography">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">
            Page Title — text-3xl font-semibold
          </h1>
          <h2 className="text-2xl font-semibold">
            Section Title — text-2xl font-semibold
          </h2>
          <h3 className="text-lg font-medium">
            Subsection — text-lg font-medium
          </h3>
          <p className="text-base">
            Body text — text-base. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-sm">
            Small body — text-sm. Used for most UI content.
          </p>
          <p className="text-xs text-muted-foreground">
            Caption — text-xs text-muted-foreground
          </p>
          <p className="font-mono text-sm">
            Monospace — SF Mono for code, hashes, addresses
          </p>
        </div>
      </Section>

      <Separator />

      {/* Spacing reference */}
      <Section title="Spacing & Radius">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Radius tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-md border bg-muted" />
                <span className="text-sm">rounded-md (6px) — buttons, inputs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg border bg-muted" />
                <span className="text-sm">rounded-lg (8px) — cards, panels</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-xl border bg-muted" />
                <span className="text-sm">rounded-xl (12px) — modals, dialogs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full border bg-muted" />
                <span className="text-sm">rounded-full — avatars, dots</span>
              </div>
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>Icon set</CardTitle>
              <CardDescription>
                Phosphor Icons — consistent weight per context
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  Regular — UI actions, navigation
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    GearSix, Trash, PencilSimple, Copy, User, EnvelopeSimple,
                    MagnifyingGlass, Plus, ArrowRight, CheckCircle, Warning,
                    Info,
                  ].map((Icon, i) => (
                    <div
                      key={i}
                      className="flex size-9 items-center justify-center rounded-md border bg-muted/50"
                    >
                      <Icon className="size-4" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  Fill — status, emphasis, active states
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    GearSix, Trash, PencilSimple, Copy, User, EnvelopeSimple,
                    MagnifyingGlass, Plus, ArrowRight, CheckCircle, Warning,
                    Info,
                  ].map((Icon, i) => (
                    <div
                      key={i}
                      className="flex size-9 items-center justify-center rounded-md border bg-muted/50"
                    >
                      <Icon className="size-4" weight="fill" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="pt-4 pb-12">
        <p className="text-xs text-muted-foreground">
          shincn design system — built on shadcn/ui, Tailwind CSS, Phosphor
          Icons, Framer Motion
        </p>
      </footer>
    </div>
  );
}
