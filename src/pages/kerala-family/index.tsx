import dynamic from 'next/dynamic';

const KeralaFamilyLandingPage = dynamic(
  () => import('../../landing-pages/kerala-family/KeralaFamilyLandingPage'),
  { ssr: false }
);

export default function Page() {
  return <KeralaFamilyLandingPage />;
}
