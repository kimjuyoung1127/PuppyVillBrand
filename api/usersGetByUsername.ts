import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { storage } from '../lib/storage'; // Assuming storage exports a 'storage' object/instance
import { User } from '../../shared/schema'; // Assuming schema exports a 'User' type

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: `Method ${event.httpMethod} Not Allowed`,
      headers: { 'Allow': 'GET' },
    };
  }

  const username = event.queryStringParameters?.username;

  if (!username || username.trim() === '') {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Username is missing or empty from query parameters.' }),
    };
  }

  try {
    // Assuming getUserByUsername might return undefined or null if not found
    const user: User | undefined = await storage.getUserByUsername(username);

    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: `User with username '${username}' not found.` }),
      };
    }
  } catch (error) {
    const e = error as Error;
    console.error(`Error fetching user with username '${username}':`, e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching user.', error: e.message }),
    };
  }
};

export default handler;
