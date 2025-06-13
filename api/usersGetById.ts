import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { storage } from './lib/storage'; // Assuming storage exports a 'storage' object/instance
import { User } from '../../shared/schema'; // Assuming schema exports a 'User' type

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: `Method ${event.httpMethod} Not Allowed`,
      headers: { 'Allow': 'GET' },
    };
  }

  const idString = event.queryStringParameters?.id;

  if (!idString) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'User ID is missing from query parameters.' }),
    };
  }

  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'User ID must be a number.' }),
    };
  }

  try {
    const user: User | undefined = await storage.getUser(id); // Assuming getUser might return undefined if not found

    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: `User with ID ${id} not found.` }),
      };
    }
  } catch (error) {
    const e = error as Error;
    console.error(`Error fetching user with ID ${id}:`, e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching user.', error: e.message }),
    };
  }
};

export default handler;
