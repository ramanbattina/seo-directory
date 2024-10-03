'use server'

import prisma from './prisma'

export async function submitTool(data: { name: string; description: string; url: string }) {
  const tool = await prisma.tool.create({
    data: {
      name: data.name,
      description: data.description,
      url: data.url,
    },
  })
  return tool
}