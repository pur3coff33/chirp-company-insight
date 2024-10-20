# Company Details Finder

## Summary

The **Company Details Finder** is a Next.js application designed to provide users with detailed information about companies based on their domain names. The application leverages the OpenAI API for generating summaries and uses the Fresh LinkedIn Profile Data API to fetch various company-related details such as company name, founding year, domain, website, email, specialties, type, headquarters address, and description.

### Features

- **Domain Search**: Users can input a company domain to retrieve relevant details.
- **Real-time Data Fetching**: The application communicates with external APIs to fetch up-to-date information.
- **Error Handling**: Graceful handling of errors when API requests fail or when invalid domains are provided.
- **Loading States**: Users are informed of ongoing data fetching processes.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **OpenAI API**: For generating intelligent summaries based on the company data.
- **Fresh LinkedIn Profile Data API**: To fetch detailed company information based on the domain provided by the user.

## Getting Started

### Prerequisites

- Node.js
- A code editor (e.g., Visual Studio Code)
- Git (optional, for version control)
- Yarn (Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pur3coff33/chirp-company-insight.git
   cd chirp-company-insight
   ```

2. **Install node_modules**:
   Type the command to install all project dependencies

```bash
yarn install
```

2. **Set up environment variables**:  
   Create a .env file in the root directory of the project and add your API keys:

# OpenAI API Key

OPENAI_API_KEY='sk-YourOpenAIAPIKeyHere' # Replace with your actual OpenAI API key

# Fresh LinkedIn Profile Data API Key

FLP_RAPID_API_KEY='YourFreshLinkedInProfileDataAPIKeyHere' # Replace with your actual Fresh API key

3. **Starting dev mode**
   To start dev server,

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Usage

- 1. Enter a valid company domain in the search field.
- 2. Click the search button to retrieve company details.
- 3. If available, the application will display the company summary and other relevant information.
- 4. In case of errors or loading states, appropriate messages will be displayed.

### AI Assisted Development

I used ChatGPT to assist in generating TypeScript types, refactoring code, and improving error handling cases, such as using regular expressions for data validation and parsing.

### Challenges

I encountered challenges during the API integration process, specifically with the OpenAI API and the Fresh LinkedIn Profile Data API. Understanding the data formats and ensuring proper handling of API responses required significant effort.
