import { Outlet } from 'react-router';
import { Layout } from '../components';
import './App.scss';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
