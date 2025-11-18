interface FilterProps {
  setFilter: (category: string) => void;
}

function CategoryFilter({ setFilter }: FilterProps) {
  const categories = ["All", "Health", "Work", "Personal"];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setFilter(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
