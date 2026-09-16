import dynamic from 'next/dynamic';

const KeralaHoneymoonLandingPage = dynamic(
  () => import('../../landing-pages/kerala-honeymoon/KeralaHoneymoonLandingPage'),
  { ssr: false }
);

export default function Page() {
  return <KeralaHoneymoonLandingPage />;
}
