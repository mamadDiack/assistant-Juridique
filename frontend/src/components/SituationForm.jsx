import { useState } from 'react';
import '../styles/SituationForm.css'

const SituationForm = ({ onSubmit }) => {
  const [situation, setSituation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (situation.trim()) {
      onSubmit(situation);
    }
  };

  return (
    <div className="situation-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="situation">Décrivez votre situation :</label>
          <textarea
            id="situation"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="Ex: J'ai reçu une amende pour..."
            rows="5"
          />
        </div>
        <button type="submit" className="btn-primary">
          Analyser la situation
        </button>
        <button onClick={() => setSituation('')} className="btn-reset">
          Réinitialiser
        </button>
      </form>
    </div>
  );
};

export default SituationForm;
