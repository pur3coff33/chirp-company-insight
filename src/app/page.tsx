'use client'; // This line marks the component as a Client Component

import { SearchDomain } from '@/components/search/search-domain';
import { useState } from 'react';

export default function Home() {
  const [companyApiDetails, setCompanyApiDetails] = useState<{
    company_info_api: FLPApiResponse | null; // Allow company_info_api to be null
    ai_summary: string | null; // Allow ai_summary to be null
  } | null>(null); // Initialize as null to represent no data
  const [error, setError] = useState<string | null>(null); // State to hold error messages
  const [loading, setLoading] = useState<boolean>(false); // State for loading status

  const searchCompany = async (domain: string) => {
    setError(null); // Reset error on new search
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch(`/api/company/${domain}`, {
        method: 'GET',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const { data } = await response.json();
      if (data) {
        setCompanyApiDetails(data);
      } else {
        setCompanyApiDetails(null); // Reset to null if no data is returned
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <SearchDomain search={searchCompany} />
        <div className="w-full max-w-3xl mx-auto p-3">
          <hr className="w-full my-2" />
          <div className="w-full">
            <h2 className="text-xl font-bold mb-3 text-center">Company Details</h2>

            {/* Error handling UI */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
                <strong>Error:</strong> {error}
              </div>
            )}

            {/* Loading state */}
            {loading && (
              <div className="text-center text-gray-500 mt-4">
                <p>Loading company details...</p>
              </div>
            )}

            {/* No data handling UI */}
            {!loading && companyApiDetails === null && (
              <div className="text-center text-gray-500 mt-4">
                <p>No company details available. Please search for a valid domain.</p>
              </div>
            )}

            {/* Company details display */}
            {!loading && companyApiDetails && (
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">✨ Summary:</span>
                  <br />
                  <span className="text-gray-600">{companyApiDetails?.ai_summary || '--'}</span>
                </p>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Company:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.company_name || '--'}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Founded:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.year_founded || '--'}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Domain:</span>
                  <span className="text-gray-600">{companyApiDetails?.company_info_api?.data?.domain || '--'}</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Website:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.website ? (
                      <a
                        href={companyApiDetails.company_info_api.data.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {companyApiDetails.company_info_api.data.website}
                      </a>
                    ) : (
                      '--'
                    )}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.email ? (
                      <a
                        href={`mailto:${companyApiDetails.company_info_api.data.email}`}
                        className="text-blue-600 underline"
                      >
                        {companyApiDetails.company_info_api.data.email}
                      </a>
                    ) : (
                      '--'
                    )}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.phone ? (
                      <a
                        href={`tel:${companyApiDetails.company_info_api.data.phone}`}
                        className="text-blue-600 underline"
                      >
                        {companyApiDetails.company_info_api.data.phone}
                      </a>
                    ) : (
                      '--'
                    )}
                  </span>
                </div>

                <p className="text-gray-700">
                  <span className="font-semibold">Specialties:</span>
                  <br />
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.specialties || '--'}
                  </span>
                </p>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="text-gray-600">{companyApiDetails?.company_info_api?.data?.type || '--'}</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">HQ:</span>
                  <span className="text-gray-600">
                    {companyApiDetails?.company_info_api?.data?.hq_full_address || '--'}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-gray-700">Description:</span>
                  <p className="text-gray-600">{companyApiDetails?.company_info_api?.data?.description || '--'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
