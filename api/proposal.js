// api/proposal.js

export default async function (request, response) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // Extract the proposal from the form data
  const { proposal } = request.body;

  // Basic validation
  if (!proposal) {
    return response.status(400).json({ error: 'Proposal is required.' });
  }

  // Add logic to save the proposal data here.

  // Send a success message
  response.status(200).json({ message: 'Your proposal has been received.' });
}
