import { useState } from 'react';

export const SearchDomain: React.FC<{ search: (domain: string) => void }> = ({ search }) => {
  const [domain, setDomain] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Improved regex for validating domains (e.g., google.com, example.org)
  const regex = /^(?!-)([a-zA-Z0-9]{1,63}(?<!-)\.)+[a-zA-Z]{2,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDomain(value);

    // Validate the domain input
    if (!regex.test(value)) {
      setError('Please enter a valid domain (try google.com, apple.com, facebook.com, etc...)');
    } else {
      setError(''); // Clear error if input is valid
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-5 mt-3">
      <h1 className="text-center font-bold text-3xl">Company Search Toolkit</h1>
      <p className="text-center">Discover detailed company information blazingly fast! ⚡⚡⚡</p>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter domain like google.com"
          className="border border-gray-300 rounded-lg shadow-lg p-3 w-full max-w-sm"
          value={domain}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={`bg-yellow-500 rounded-lg shadow-lg p-3 ${error ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => search(domain)}
          disabled={!!error || !domain}
        >
          Search
        </button>
      </div>

      {/* Display error message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
