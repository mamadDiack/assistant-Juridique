const Recommandation = ({ advice }) => {
  if (!advice) return null;

  return (
    <div className="recommandation">
      <p className="advice-text">{advice}</p>
    </div>
  );
};

export default Recommandation;
