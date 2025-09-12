'use client'

import { $doTheThing } from '@/app/actions'
import { useActionState } from 'react'

export function Form({ value }: { value: number }) {
	async function update() {
		return $doTheThing()
	}

	const [state, formAction, isPending] = useActionState(update, undefined)

	return (
		<div className="flex flex-col gap-4">
			<code>
				State: {JSON.stringify(state ?? {})}, isPending: {JSON.stringify(isPending)}
			</code>
			<code>Value: {value}</code>
			<form action={formAction}>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
