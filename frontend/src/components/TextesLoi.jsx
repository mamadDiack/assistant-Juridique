const TextesLoi = ({ articles }) => {
  return (
    <div className="textes-loi">
      <ul>
        {articles?.map((article, index) => (
          <li key={index} className="article-item">
            <strong>{article.reference}</strong>
            <p>{article.contenu}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextesLoi;
