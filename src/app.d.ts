interface FundingInfo {
  crunchbase_url: string;
  last_funding_round_amount: number | null;
  last_funding_round_currency: string | null;
  last_funding_round_month: number;
  last_funding_round_type: string;
  last_funding_round_year: number;
  num_funding_rounds: number | null;
}

interface Location {
  city: string;
  country: string;
  full_address: string;
  is_headquarter: boolean;
  line1: string;
  line2: string;
  region: string;
  zipcode: string;
}

interface CompanyData {
  company_id: string;
  company_name: string;
  description: string;
  domain: string;
  email: string;
  employee_count: number;
  employee_range: string;
  follower_count: number;
  funding_info: FundingInfo;
  hq_address_line1: string;
  hq_address_line2: string;
  hq_city: string;
  hq_country: string;
  hq_full_address: string;
  hq_postalcode: string;
  hq_region: string;
  industries: string[];
  linkedin_url: string;
  locations: Location[];
  logo_url: string;
  phone: string;
  specialties: string;
  tagline: string;
  website: string;
  year_founded: number;
  type: string;
}

interface FLPApiResponse {
  confident_score: string;
  data: CompanyData;
  message: string;
}
