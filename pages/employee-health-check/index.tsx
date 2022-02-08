import { HealthCheck } from 'components/Container/HealthCheck';
import Head from 'next/head';

const EmployeeHealthCheck = () => {
  return (
    <>
      <Head>
        <title>Health Check | SIRKA</title>
        <meta name="description" content={'B2B Health Check Sirka'} />
        <meta name="title" content={'B2B Health Check Sirka'} />
      </Head>
      <HealthCheck />
    </>
  );
};
export default EmployeeHealthCheck;
