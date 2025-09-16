// api/ask.js

export default async function (request, response) {
  // Only allow POST requests, which are used for form submissions
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // Extract the question from the form data
  const { question } = request.body;

  // Basic validation to ensure the question field is not empty
  if (!question) {
    return response.status(400).json({ error: 'Question is required.' });
  }

  // At this point, you have the question.
  // This is where you would add your custom logic.
  // For example, you could save it to a database or send an email.

  // Send a success message back to the frontend
  response.status(200).json({ message: 'Your question has been received.' });
}
