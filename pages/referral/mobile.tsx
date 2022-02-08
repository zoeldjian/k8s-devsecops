import { Referral } from 'components/Container/Referral';
import Head from 'next/head';

const ReferralMobilePage = () => {
  return (
    <>
      <Head>
        <title>Referral | SIRKA</title>
        <meta name="description" content={'Program Referral Sirka'} />
        <meta name="title" content={'Program Referral Sirka'} />
      </Head>
      <Referral isMobile={true} />
    </>
  );
};
export default ReferralMobilePage;
