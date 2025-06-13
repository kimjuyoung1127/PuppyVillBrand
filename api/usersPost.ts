import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { storage } from '../lib/storage'; // Assuming storage exports a 'storage' object/instance
import { InsertUser } from '../../shared/schema'; // Assuming schema exports an 'InsertUser' type

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: `Method ${event.httpMethod} Not Allowed`,
      headers: { 'Allow': 'POST' },
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Request body is missing.' }),
    };
  }

  let userData: InsertUser;
  try {
    userData = JSON.parse(event.body);
    // Basic validation - can be expanded with a library like Zod using the schema
    if (!userData || typeof userData.name !== 'string' || typeof userData.email !== 'string') {
        throw new Error('Invalid user data format.');
    }
  } catch (error) {
    const e = error as Error;
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON format or missing required fields.', error: e.message }),
    };
  }

  try {
    const newUser = await storage.createUser(userData);
    return {
      statusCode: 201,
      body: JSON.stringify(newUser),
    };
  } catch (error) {
    const e = error as Error;
    console.error('Error creating user:', e);
    // Differentiate between known errors (e.g., email conflict) and server errors if possible
    // For now, a generic 500
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating user.', error: e.message }),
    };
  }
};

export default handler;
