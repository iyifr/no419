import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
	const { userId } = auth()
	const userOBJ = await currentUser()

	if (userId) {
		const res = await prisma.user.findUnique({
			where: {
				email: userOBJ?.emailAddresses[0].emailAddress as string,
			},
		})

		// If email already exists in the database
		return res
			? NextResponse.json({ newUser: false })
			: NextResponse.json({ newUser: true })
	}
}

import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(request: Request) {
	const payload: WebhookEvent = await request.json()

	try {
		if (payload.type === 'user.created') {
			let errorMSG = null

			await prisma.user
				.create({
					data: {
						email: payload.data.email_addresses[0].email_address,
						username: payload.data.username,
						clerkID: payload.data.id,
					},
				})
				.catch((error) => (errorMSG = error.message))

			return NextResponse.json({ message: 'Received', msg: errorMSG })
		}
	} catch (e) {
		console.log(e)
		return NextResponse.error()
	}
}
