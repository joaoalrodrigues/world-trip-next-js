import { NextApiRequest, NextApiResponse } from "next";
import { continents } from './data.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.json(continents);
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}
