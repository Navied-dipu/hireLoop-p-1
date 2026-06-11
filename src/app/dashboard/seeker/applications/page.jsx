

import ApplicationsTable from './ApplicationsTable';
import { getUserSession } from '@/lib/core/session';
import { getApplicationsByApplicant } from '@/lib/api/applications';


const ApplicationsPage = async () => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user.id)
    return (
        <div>
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
        </div>
    );
};

export default ApplicationsPage;