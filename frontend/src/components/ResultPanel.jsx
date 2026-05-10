import InfractionCard from './InfractionCard';
import TextesLoi from './TextesLoi';
import Scenarios from './Scenarios';
import Recommandation from './Recommandation';

const ResultPanel = ({ results }) => {
  
  if (!results) return null;
  console.log(results);

  const analyse = results;

  return (
    <div className="result-panel">
      <h2>Résultats de l'analyse</h2>
      
      <div className="analyse-explication">
        <p>{analyse.explication}</p>
      </div>

      <div className="results-grid">
        {analyse.infraction_potentielle && (
          <section className="result-section">
            <h3>Analyse du risque</h3>
            <InfractionCard data={analyse.infraction_potentielle} />
          </section>
        )}

        <section className="result-section">
          <h3>Textes de loi applicables</h3>
          <TextesLoi articles={analyse.textes_de_loi} />
        </section>

        <section className="result-section">
          <h3>Scénarios possibles</h3>
          <Scenarios items={analyse.scenarios} />
        </section>

        <section className="result-section">
          <h3>Recommandation</h3>
          <Recommandation advice={analyse.recommandation} />
        </section>
      </div>
    </div>
  );
};

export default ResultPanel;
