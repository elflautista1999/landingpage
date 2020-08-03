import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}


export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ name: 'John Doe' })
}


export const config = {
	api: {
		bodyParser: {
			sizeLimit: '1mb'
		}
	}
}
