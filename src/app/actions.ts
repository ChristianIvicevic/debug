'use server'

import { setTimeout } from 'node:timers/promises'
import { revalidatePath } from 'next/cache'

export async function $doTheThing() {
	await setTimeout(2_000)
	revalidatePath('/')
	return { success: true }
}
