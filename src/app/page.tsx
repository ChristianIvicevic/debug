import { Form } from '@/app/form.client'

export default function HomePage() {
	const value = Math.random()

	return (
		<div className="container relative">
			<div className="py-8 text-center">
				<Form value={value} />
			</div>
		</div>
	)
}
