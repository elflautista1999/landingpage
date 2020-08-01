// @ts-ignore
import { InferGetServerSidePropsType } from 'next'
// import { GetServerSideProps } from 'next'
// import useSWR from 'swr'

type Data = {
	id: string,
	name: string,
	height:string
}[]

// export const getServerSideProps: GetServerSideProps = async ({ req, res, params, query }) => {
//
// 	console.log('getServerSideProps')
// 	console.log('req', Object.keys(req))
// 	console.log('res', Object.keys(res))
// 	console.log('params', params)
// 	console.log('query', query)
// 	return { props: { data: [{ name: 'xxx' }, { name: 'ttt' }] } }
// }


export const getServerSideProps = async () => {
	console.log('getServerSideProps')

	const res = await fetch('http://127.0.0.1:3000/api/people')
	const data: Data = await res.json()

	return {
		props: {
			data
		}
	}
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	// will resolve posts to type Data
	console.log('Page',data)
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
