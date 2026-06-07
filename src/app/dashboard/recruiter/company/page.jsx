import React from 'react';

// import { getUserSession } from '@/lib/core/session';
// import { getRecruiterCompany } from '@/lib/api/companies';
import CompanyProfile from './companyprofile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companies';

const CompanyPage = async () => {

    const user = await getUserSession();
    const company = await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
            {/* <CompanyProfile ></CompanyProfile> */}
        </div>
    );
};

export default CompanyPage;