import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type Props = {
  children?: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
