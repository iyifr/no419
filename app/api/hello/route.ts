import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
	const res = await prisma.user.findMany()
	return NextResponse.json(res)
}
