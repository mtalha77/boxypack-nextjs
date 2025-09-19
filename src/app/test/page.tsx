'use client';

import SearchDropdown from '../components/SearchDropdown';
import { useState } from 'react';

export default function TestPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState('test');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleResultClick = () => {
    console.log('Result clicked');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Search Dropdown</h1>
      <SearchDropdown
        isOpen={isOpen}
        onClose={handleClose}
        results={results}
        isLoading={isLoading}
        query={query}
        onResultClick={handleResultClick}
      />
    </div>
  );
}
