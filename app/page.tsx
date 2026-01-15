import { ETNAAbout } from '@/components/ETNAAbout';
import { ETNAFeatures } from '@/components/ETNAFeatures';
import { ETNAHeader } from '@/components/ETNAHeader';
import { ETNAProducts } from '@/components/ETNAProducts';

export default function Home() {
  return (
    <>
      <ETNAHeader />
      <ETNAFeatures />
      <ETNAAbout />
      <ETNAProducts />
    </>
  );
}
