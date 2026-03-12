export interface DocItem {
  title: string
  slug: string
  description?: string
}

export interface DocSection {
  title: string
  items: DocItem[]
}

export const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        slug: "",
        description: "What is shincn and how to get started.",
      },
      {
        title: "Installation",
        slug: "installation",
        description: "How to install shincn in your project.",
      },
      {
        title: "components.json",
        slug: "components-json",
        description: "Configuration file for your project.",
      },
      {
        title: "Theming",
        slug: "theming",
        description: "Customize colors, fonts, and tokens.",
      },
      {
        title: "Dark Mode",
        slug: "dark-mode",
        description: "Add dark mode support to your project.",
      },
      {
        title: "CLI",
        slug: "cli",
        description: "Use the CLI to add components.",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", slug: "components/accordion" },
      { title: "Alert", slug: "components/alert" },
      { title: "Alert Dialog", slug: "components/alert-dialog" },
      { title: "Aspect Ratio", slug: "components/aspect-ratio" },
      { title: "Avatar", slug: "components/avatar" },
      { title: "Badge", slug: "components/badge" },
      { title: "Breadcrumb", slug: "components/breadcrumb" },
      { title: "Button", slug: "components/button" },
      { title: "Button Group", slug: "components/button-group" },
      { title: "Calendar", slug: "components/calendar" },
      { title: "Card", slug: "components/card" },
      { title: "Carousel", slug: "components/carousel" },
      { title: "Chart", slug: "components/chart" },
      { title: "Checkbox", slug: "components/checkbox" },
      { title: "Collapsible", slug: "components/collapsible" },
      { title: "Combobox", slug: "components/combobox" },
      { title: "Command", slug: "components/command" },
      { title: "Context Menu", slug: "components/context-menu" },
      { title: "Dialog", slug: "components/dialog" },
      { title: "Drawer", slug: "components/drawer" },
      { title: "Dropdown Menu", slug: "components/dropdown-menu" },
      { title: "Empty", slug: "components/empty" },
      { title: "Field", slug: "components/field" },
      { title: "Hover Card", slug: "components/hover-card" },
      { title: "Input", slug: "components/input" },
      { title: "Input Group", slug: "components/input-group" },
      { title: "Input OTP", slug: "components/input-otp" },
      { title: "Kbd", slug: "components/kbd" },
      { title: "Label", slug: "components/label" },
      { title: "Menubar", slug: "components/menubar" },
      { title: "Native Select", slug: "components/native-select" },
      { title: "Navigation Menu", slug: "components/navigation-menu" },
      { title: "Pagination", slug: "components/pagination" },
      { title: "Popover", slug: "components/popover" },
      { title: "Progress", slug: "components/progress" },
      { title: "Radio Group", slug: "components/radio-group" },
      { title: "Resizable", slug: "components/resizable" },
      { title: "Scroll Area", slug: "components/scroll-area" },
      { title: "Select", slug: "components/select" },
      { title: "Separator", slug: "components/separator" },
      { title: "Sheet", slug: "components/sheet" },
      { title: "Skeleton", slug: "components/skeleton" },
      { title: "Slider", slug: "components/slider" },
      { title: "Sonner", slug: "components/sonner" },
      { title: "Spinner", slug: "components/spinner" },
      { title: "Switch", slug: "components/switch" },
      { title: "Table", slug: "components/table" },
      { title: "Tabs", slug: "components/tabs" },
      { title: "Textarea", slug: "components/textarea" },
      { title: "Toggle", slug: "components/toggle" },
      { title: "Toggle Group", slug: "components/toggle-group" },
      { title: "Tooltip", slug: "components/tooltip" },
    ],
  },
]

/** Flatten all items for search / prev-next navigation */
export function getAllDocItems(): DocItem[] {
  return docsConfig.flatMap((section) => section.items)
}

/** Find an item by its slug */
export function getDocBySlug(slug: string): DocItem | undefined {
  return getAllDocItems().find((item) => item.slug === slug)
}

/** Get prev and next items relative to the current slug */
export function getPrevNext(slug: string): {
  prev: DocItem | null
  next: DocItem | null
} {
  const all = getAllDocItems()
  const idx = all.findIndex((item) => item.slug === slug)
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  }
}
