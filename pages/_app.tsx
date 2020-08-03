import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout title="Next.js + TypeScript + Tailwind">
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
