const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilters({ currentFilter, changeFilter }) {

  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
            //dynamic class name - check if current filter is active
            //if current filter matches f, then class name will be 'active'
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
