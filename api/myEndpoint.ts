import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'GET') {
    return { statusCode: 200, body: JSON.stringify({ message: 'Hello from API!' }) };
  } else {
    return { statusCode: 405, body: `Method ${event.httpMethod} Not Allowed`, headers: { 'Allow': 'GET' } };
  }
};

export default handler;
