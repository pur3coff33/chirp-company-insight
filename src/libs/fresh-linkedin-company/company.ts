// make env
const FLP_RAPID_API_URL = 'https://fresh-linkedin-profile-data.p.rapidapi.com';
const FLP_RAPIP_API_HOST = 'fresh-linkedin-profile-data.p.rapidapi.com';
const FLP_RAPID_API_KEY = process.env.FLP_RAPID_API_KEY ?? '';

export const fetchCompanyDetails = async (domain: string) => {
  const response = await fetch(
    `${FLP_RAPID_API_URL}/get-company-by-domain?${new URLSearchParams({
      domain: domain,
    })}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': FLP_RAPIP_API_HOST,
        'x-rapidapi-key': FLP_RAPID_API_KEY,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message);
  }

  const data: FLPApiResponse = await response.json();
  const companyData = data;
  return companyData;
};
