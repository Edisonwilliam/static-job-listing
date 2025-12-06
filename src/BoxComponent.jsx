import React, { useState } from "react";
import data from "./data.json";

const BoxComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState([]); // Stores clicked tags


  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter)); // remove if already selected
    } else {
      setSelectedFilters([...selectedFilters, filter]); // add new filter
    }
  };

  
  const filteredData = selectedFilters.length === 0
    ? data
    : data.filter((item) => {
        const tags = [item.role, item.level, ...(item.languages || []), ...(item.tools || [])];
        return selectedFilters.every((filter) => tags.includes(filter));
      });


  const clearFilters = () => setSelectedFilters([]);

  return (
    <div className="p-4">

    
      {selectedFilters.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-20 flex items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {selectedFilters.map((filter, index) => (
              <div
                key={index}
                className="flex items-center bg-teal-100 rounded-md overflow-hidden"
              >
                <span className="text-teal-600 font-bold px-2">{filter}</span>
                <button
                  onClick={() =>
                    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
                  }
                  className="bg-teal-600 text-white px-2 hover:bg-gray-800"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={clearFilters}
            className="text-teal-600 font-bold hover:underline"
          >
            Clear
          </button>
        </div>
      )}

    
      {filteredData.map((item, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg shadow-md p-6 mb-12 ${
            item.featured ? "border-l-4 border-teal-500" : ""
          }`}
        >
          <img src={item.logo} alt={item.company} className="-mt-14 md:mt-0" />

          <div className="mt-3 flex space-x-5 items-center">
            <h2 className="text-teal-400 text-2xl font-bold">{item.company}</h2>

            <div className="flex space-x-3">
              {item.new && (
                <div className="bg-teal-400 px-2 py-1 rounded-xl">
                  <h2 className="text-white font-bold">NEW!</h2>
                </div>
              )}
              {item.featured && (
                <div className="bg-gray-800 px-2 py-1 rounded-xl">
                  <h2 className="text-white font-bold">FEATURED</h2>
                </div>
              )}
            </div>
          </div>

          <p className="mt-2 font-bold text-[18px] hover:text-teal-500 cursor-pointer">
            {item.position}
          </p>

          <div className="flex items-center gap-3 text-gray-500 text-sm mt-4 font-bold">
            <span>{item.postedAt}</span>
            <span>•</span>
            <span>{item.contract}</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>

          <br />
          <hr className="md:hidden" />

        
          <div className="mt-3 flex flex-wrap gap-3">
            {[item.role, item.level, ...(item.languages || []), ...(item.tools || [])].map(
              (tag, i) => (
                <button
                  key={i}
                  onClick={() => handleFilterClick(tag)}
                  className={`px-3 py-1 rounded-md font-bold flex-shrink-0 ${
                    selectedFilters.includes(tag)
                      ? "bg-teal-600 text-white"
                      : "bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      ))}

      
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No results match your selected filters 
        </p>
      )}
    </div>
  );
};

export default BoxComponent;