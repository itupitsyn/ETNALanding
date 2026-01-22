import { ETNAAbout } from '@/components/ETNAAbout';
import { ETNAFeatures } from '@/components/ETNAFeatures';
import { ETNAForm } from '@/components/ETNAForm';
import { ETNAHeader } from '@/components/ETNAHeader';
import { ETNAProducts } from '@/components/ETNAProducts';

export default function Home() {
  return (
    <>
      <ETNAHeader />
      <main role="main">
        <ETNAFeatures />
        <ETNAAbout />
        <ETNAProducts />
        <ETNAForm />
      </main>
    </>
  );
}
