// @ts-ignore
// import { GetServerSidePropsContext, InferGetServerSidePropsType, GetStaticProps } from 'next'
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
// import { GetServerSideProps } from 'next'
// import useSWR from 'swr'

type Time = {
	now: number
}

// export const getStaticProps: GetStaticProps = async (context): Promise<Data> => {
// 	console.log('getStaticProps', Date.now())
// 	return {
// 		props: {
// 			time: {
// 				now: Date.now()
// 			}
// 		}
// 	}
// }

interface Data {
	props: { time: Time },
	unstable_revalidate: number,
}


export const getStaticProps = async ({   }: GetStaticPropsContext): Promise<Data> => {
	console.log('getServerSideProps', Date.now())
	return {
		props: {
			time: {
				now: Date.now()
			}
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		unstable_revalidate: 10 // In seconds
	}
}

function Page({ time }: InferGetServerSidePropsType<typeof getStaticProps>) {
	// will resolve posts to type Data
	console.log('Page', time)
	if (time) {
		const now = new Date(time.now)
		return (
			<div>
				{now.toISOString()} ({time.now})
			</div>
		)
	} else {
		return <div>loading</div>
	}
}

export default Page
