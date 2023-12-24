import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	// @ts-ignore
	if (!global.prisma) {
		//@ts-expect-error
		global.prisma = new PrismaClient()
	}
	//@ts-expect-error
	prisma = global.prisma
}

export default prisma
