import React from 'react';
import PostJobform from './postJobform';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
// import PostJobForm from './PostJobForm';
// import { getLoggedInRecruiterCompany } from '@/lib/api/companies';

const PostJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();

    return (
        <div>
            <PostJobform company={company}></PostJobform>
        </div>
    );
};

export default PostJobPage;