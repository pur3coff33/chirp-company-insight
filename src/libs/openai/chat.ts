// create ENV
const OPENAI_API_URL = 'https://api.openai.com';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? '';

export const generateCompanySummary = async (companyDetailsJsonString: string) => {
  const initialPrompt = `Given the company details in JSON format below, create a concise summary of the company. Please respond in plain text only, without additional commentary or prompts.\n\n`;

  console.log(companyDetailsJsonString);

  const response = await fetch(`${OPENAI_API_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: `${initialPrompt}${companyDetailsJsonString}` }],
      max_tokens: 500,
      temperature: 0.5,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message);
  }

  const responseData = await response.json();
  return responseData.choices[0].message.content;
};
