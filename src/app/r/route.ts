import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  // shadcn CLI uses query params like ?base=base, ?name=button, etc.
  const name = searchParams.get("base") ?? searchParams.get("name")

  // Determine which JSON file to serve
  const fileName = name ? `${name}.json` : "registry.json"

  // Try reading from public/r/ directory
  // On Vercel, public/ files are at the root of the deployment
  const possiblePaths = [
    path.join(process.cwd(), "public", "r", fileName),
    path.join(process.cwd(), ".next", "server", "app", "r", fileName),
  ]

  for (const filePath of possiblePaths) {
    try {
      const data = fs.readFileSync(filePath, "utf-8")
      return new NextResponse(data, {
        headers: { "Content-Type": "application/json" },
      })
    } catch {
      continue
    }
  }

  // Fallback: fetch from own origin (works on Vercel where public/ is served statically)
  const origin = request.nextUrl.origin
  const url = `${origin}/r/${fileName}`
  try {
    const res = await fetch(url)
    if (res.ok) {
      const data = await res.text()
      return new NextResponse(data, {
        headers: { "Content-Type": "application/json" },
      })
    }
  } catch {
    // fall through
  }

  return NextResponse.json(
    { error: name ? `Item "${name}" not found in registry` : "Registry not found" },
    { status: 404 }
  )
}
