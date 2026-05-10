const Scenarios = ({ items }) => {
  return (
    <div className="scenarios">
      <ul>
        {items?.map((item, index) => (
          <li key={index} className="scenario-item">
            <strong>{item.titre}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scenarios;
