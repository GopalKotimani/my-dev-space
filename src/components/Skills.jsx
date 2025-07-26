import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import { Link } from "react-router-dom";

const categoryColors = {
  DSA: "text-pink-600 border-pink-600",
  JavaScript: "text-yellow-600 border-yellow-600",
  React: "text-blue-600 border-blue-600",
  TailwindCSS: "text-green-600 border-green-600",
};

const ITEMS_PER_PAGE = 5;

const Playground = () => {
  const mainTopics = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState(mainTopics[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredQuestions = Object.entries(skillsData[activeTab]).flatMap(
    ([subtopic, questions]) =>
      questions
        .filter((q) =>
          q.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((q) => ({ ...q, subtopic }))
  );

  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">🚀 Dev Playground</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {mainTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => {
              setActiveTab(topic);
              setSearchTerm("");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border font-semibold transition ${activeTab === topic
              ? `bg-white shadow ${categoryColors[topic]}`
              : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="🔍 Search question title..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow-md overflow-auto">
        <table className="table-fixed w-full text-left border border-gray-300 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="w-1/4 p-3 border-b">Question</th>
              <th className="w-1/2 p-3 border-b">Description</th>
              <th className="w-1/4 p-3 border-b">Subtopic</th>
              <th className="w-1/4 p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedQuestions.map((q, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900 relative group">
                  <span className="truncate block max-w-[200px]">{q.title}</span>
                  <div className="absolute z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-2 rounded shadow-lg border w-64  top-0 mt-1">
                    {q.title}
                  </div>
                </td>

                <td className="p-3 text-gray-600 relative group">
                  <span className="truncate block max-w-[300px]">{q.description}</span>
                  <div className="absolute z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-2 rounded shadow-lg border w-72 top-0 mt-1">
                    {q.description}
                  </div>
                </td>

                <td className="p-3 text-blue-600">{q.subtopic}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => alert(`Explain: ${q.title}`)}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded-xl text-sm"
                  >
                    Explain
                  </button>
                  <button
                    className="border border-green-600 text-green-600 hover:bg-green-100 px-3 py-1 rounded-xl text-sm"
                  >
                    Try
                  </button>
                </td>
              </tr>
            ))}
            {paginatedQuestions.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No questions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => setCurrentPage(pg)}
            className={`px-3 py-1 rounded-full border ${pg === currentPage
              ? "bg-blue-600 text-white"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {pg}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Playground;
