import { useState } from 'react';
import { analyserSituation } from './api/analyse';
import Header from './components/Header';
import SituationForm from './components/SituationForm';
import ResultPanel from './components/ResultPanel';
import './App.css';

export default function App() {
  const [analyse, setAnalyse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const handleAnalyse = async (situation) => {
    setLoading(true);
    setError(null);
    setAnalyse(null);
    try {
      const result = await analyserSituation(situation);
      
      setAnalyse(result);
    } catch (e) {
      setError('Erreur lors de l\'analyse. Vérifiez que le backend est démarré.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <SituationForm onSubmit={handleAnalyse} loading={loading} />
        {error   && <p className="error">{error}</p>}
        {loading && <Loader />}
        {analyse && <ResultPanel results={analyse} />}
      </main>
    </div>
  );
}

function Loader() {
  return (
    <div className="loader">
      <div className="dots"><span/><span/><span/></div>
      <p>Analyse en cours selon le droit ivoirien...</p>
    </div>
  );
}