import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import './layout.scss';

type Props = {
  children?: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
