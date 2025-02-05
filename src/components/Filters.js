const Filters = (props) => {
  const { label, filterCondition, setListofCards } = props;
  return (
    <button
      className="filter-btn"
      onClick={() => {
        let card = filterCondition;

        setListofCards(card);
      }}
    >
      {label}
    </button>
  );
};

export default Filters;