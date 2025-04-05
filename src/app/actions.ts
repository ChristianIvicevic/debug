'use server'

import { actionClient } from '@/safe-action'
import { z } from 'zod'

const things = { one: 1, two: 2, three: 3 }

// Cannot be inlined.
// const SCHEMA = z.object({
// 	things: z.enum(Object.entries(things).map(([kind]) => kind) as [string, ...string[]]),
// })

export const $serverAction = actionClient
	.schema(
		z.object({
			things: z.enum(Object.entries(things).map(([kind]) => kind) as [string, ...string[]]),
		}),
	)
	.action(async () => {})
