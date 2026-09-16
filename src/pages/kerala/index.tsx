import dynamic from 'next/dynamic';

const KeralaLandingPage = dynamic(
  () => import('../../landing-pages/kerala/KeralaLandingPage'),
  { ssr: false }
);

export default function Page() {
  return <KeralaLandingPage />;
}
