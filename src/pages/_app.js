import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;