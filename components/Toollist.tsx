import { Tool } from '@prisma/client'

type ToolListProps = {
  tools: Tool[]
}

export default function ToolList({ tools }: ToolListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <div key={tool.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{tool.name}</h2>
          <p className="text-gray-600">{tool.description}</p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Visit Tool
          </a>
        </div>
      ))}
    </div>
  )
}