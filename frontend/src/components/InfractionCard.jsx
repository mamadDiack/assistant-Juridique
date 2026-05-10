const InfractionCard = ({ data }) => {
  if (!data.detectee) return <p>Aucune infraction majeure détectée.</p>;

  return (
    <div className="infraction-card">
      <p className="gravite">
        Niveau de risque : 
        <span className={`badge risk-${data.niveau_risque?.toLowerCase()}`}>
          {data.niveau_risque}
        </span>
      </p>
      <div className="infraction-details">
        <p>{data.details}</p>
      </div>
    </div>
  );
};

export default InfractionCard;
