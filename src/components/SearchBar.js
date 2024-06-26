import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
