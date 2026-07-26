import { Button } from "@/components/ui/button"
import type { User } from "./types"
import env from "./config/env"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./components/data-table"

async function getData(): Promise<{ data: User[]; message: string }> {
  // Fetch data from your API here.
  const res = await fetch(`${env.API_URL}/users`)
  const resJson = await res.json()
  return resJson;
}

export function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    try {
      getData().then((result) => {
        setUsers(result.data);
        toast.success(result.message);
      });
    } catch (error) {
      console.error("Error fetching data:", error)
      toast.error((error as Error).message)
    }
  }, [])

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ]

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        {/*  */}
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={users} />
        </div>
      </div>
    </div>
  )
}

export default App
