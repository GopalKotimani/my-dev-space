import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { playgroundData } from '../data/skills'
import { Link } from 'react-router-dom'

const Skills = () => {
  const [selectedTopic, setSelectedTopic] = React.useState(null);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">

      <div className="flex-1  overflow-y-auto p-2">
        <h1 className="text-3xl font-bold text-center mb-4">My Dev Playground</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-full pb-4">
          {Object.entries(playgroundData).map(([category, topics]) => (
            <div key={category} className="bg-white p-2 rounded-xl shadow h-full">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category}</h2>

              <div className="flex flex-wrap gap-2">
                {topics.map((topic, idx) => (
                  <Link
                    key={idx}
                    className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition"
                    to ={`/playground/${topic.toLowerCase()}`}
                  >
                    {topic}
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {selectedTopic && (
        <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 min-w-[80%] min-h-[80%]">
            <h2 className="text-xl font-bold mb-4">{selectedTopic}</h2>
            <div>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-center">Sl. No</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b p-2 text-center">01</td>
                    <td className="border-b p-2 text-left">This is a detailed description of the {selectedTopic} topic.</td>
                    <td className="border-b p-2 text-center">
                      <button className='mr-1 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 py-2 px-4 '>Explain</button>
                      <button className='ml-1 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100  py-2 px-4'>Try</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setSelectedTopic(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  )
}

export default Skills