import Link from 'next/link'
import prisma from '@/lib/prisma'
import ToolList from '@/components/ToolList'

export default async function Home() {
  const tools = await prisma.tool.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">SEO Tools Directory</h1>
      <Link href="/submit" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit a Tool
      </Link>
      <ToolList tools={tools} />
    </div>
  )
}