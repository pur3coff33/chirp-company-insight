import { fetchCompanyDetails } from '@/libs/fresh-linkedin-company/company';
import { generateCompanySummary } from '@/libs/openai/chat';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const GET = async (_request: NextRequest, { params }: { params: { domain: string } }) => {
  try {
    const { domain } = params;

    // validate domain if exists
    if (!domain) {
      return NextResponse.json({ message: 'Domain is required' }, { status: 400 });
    }

    // fetch company data
    const companyData = await fetchCompanyDetails(domain);

    if (!companyData) {
      return NextResponse.json({ message: 'Company not found' }, { status: 404 });
    }

    // use llm to generate company summary
    const aiCompanySummary = await generateCompanySummary(JSON.stringify(companyData, null, 2));

    return NextResponse.json({
      success: true,
      data: { company_info_api: companyData, ai_summary: aiCompanySummary },
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Something went wrong while getting company details.' },
      { status: 500 }
    );
  }
};
