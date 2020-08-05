import Link from 'next/link'
import * as React from 'react'

const Footer = () => <div className="p-4 text-xs shadow rounded bg-blue-100">
	<Link href="/">
		<a>Home</a>
	</Link>
	<span> | </span>
	<Link href="/about">
		<a>About</a>
	</Link>
	<span> | </span>
	<Link href="/people">
		<a>People</a>
	</Link>
	<span> | </span>
	<Link href="/time">
		<a>Time</a>
	</Link>
	<span> | </span>
	<Link href="/env">
		<a>Env</a>
	</Link>
</div>

export default Footer
