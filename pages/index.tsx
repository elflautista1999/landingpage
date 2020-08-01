import Link from 'next/link'
import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
	return (
		<Layout title="Next.js + TypeScript + Tailwind">
			<div>
				<h1>Hello Next.js 👋</h1>
				<p>
					<Link href="/about">
						<a>About</a>
					</Link>
					<span> | </span>
					<Link href="/people">
						<a>People</a>
					</Link>
				</p>
				<div className="p-4 shadow rounded bg-blue-200">
					<h1 className="text-white leading-normal">Next.js</h1>
					<p className="text-blue-600">with Tailwind CSS</p>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage
