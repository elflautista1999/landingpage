// @ts-ignore
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
// import { GetServerSideProps } from 'next'
// import useSWR from 'swr'

type Data = {
	id: string,
	name: string,
	height: string
}[]


export const getServerSideProps = async ({ req }: GetServerSidePropsContext): Promise<{ props: { data: Data } }> => {
	console.log('getServerSideProps')
	const protocol = req.headers['x-forwarded-proto'] || 'http'
	const url = `${protocol}://${req.headers.host}/api/people`

	console.log({ url })
	const res = await fetch(url)
	const data: Data = await res.json()

	return {
		props: {
			data
		}
	}
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	// will resolve posts to type Data
	console.log('Page', data)
	if (data) {
		return (
			<ul>
				{data.map((x) => <li key={x.id}>{x.name} ({x.height})</li>)}
			</ul>
		)
	} else {
		return <div>loading</div>
	}
}

export default Page
