'use client'

import { $serverAction } from '@/app/actions'
import { useAction } from 'next-safe-action/hooks'

export function Button() {
	const { execute } = useAction($serverAction)
	return (
		<button type="button" onClick={() => execute({ things: 'one' })}>
			Click Me
		</button>
	)
}
