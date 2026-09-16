import dynamic from 'next/dynamic';

const KeralaSeniorLandingPage = dynamic(
  () => import('../../landing-pages/kerala-senior/KeralaSeniorLandingPage'),
  { ssr: false }
);

export default function Page() {
  return <KeralaSeniorLandingPage />;
}
