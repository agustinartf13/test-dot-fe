import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { province } = req.query;

  if (!province) {
    return res.status(400).json({ error: 'Province ID is required' });
  }

  try {
    const response = await fetch(`https://api.rajaongkir.com/starter/city?province=${province}`, {
      method: 'GET',
      headers: {
        'key': 'a28014ff2341ff4a082434646adf943f'
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
}
