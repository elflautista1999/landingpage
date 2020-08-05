import { GetServerSideProps, GetServerSidePropsContext } from 'next'


interface Data {
	props: { env: { [key: string]: string | undefined } },
}


export const getServerSideProps: GetServerSideProps = async ({}: GetServerSidePropsContext): Promise<Data> => {
	console.log('getServerSideProps', Date.now())
	let env: { [key: string]: string | undefined } = {}
	for (let k in process.env) {
		if (/ENV/.test(k) || k == 'OVERRIDE') {
			env[k] = process.env[k]
		}
	}
	return {
		props: {
			env
		}
	}
}

function Page({ env }: { env: { [key: string]: string | undefined } }) {
	// will resolve posts to type Data
	console.log('Page', env)
	if (env) {
		return (
			<div>
				<h1>{env['OVERRIDE']}</h1>
				<pre>{JSON.stringify(env, null, 2)}</pre>
			</div>
		)
	} else {
		return <div>loading</div>
	}
}

export default Page
