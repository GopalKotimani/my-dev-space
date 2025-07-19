import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Skills = () => {
  const playgroundData = {
    DSA: [
      'Arrays', 'Recursion', 'Searching and Sorting', 'Linked List',
      'String', 'Stack and Queue', 'Binary Search Algorithm', 'Two Pointers and Sliding Window',
      'Binary Tree', 'Binary Search Tree', 'Heap', 'BackTracking', 'Dynamic Programming',
      'Graph', 'Tries', 'Searching and Sorting - Advanced', 'Strings - Advanced'
    ],
    JavaScript: [
      'Scope', 'IIFE (Immediately Invoked Function Expression)',
      'Hoisting', 'Closures', 'Callbacks', 'Promises', 'Async & Await'
    ],
    ReactJS: [
      "JSX", "Components", "Props", "State", "Hooks", "Component Lifecycle",
      "React Router", "Forms", "Context API", "State Management", "Performance Optimization",
      "Error Boundaries", "Portals", "Custom Hooks", "React Patterns", "Testing"
    ],

    TailwindCSS: ['Flexbox', 'Spacing', 'Typography'],
  };
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">
      <Navbar />

      <div className="flex-1  overflow-y-auto p-2">
        <h1 className="text-3xl font-bold text-center mb-4">My Dev Playground</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-full pb-4">
          {Object.entries(playgroundData).map(([category, topics]) => (
            <div key={category} className="bg-white p-2 rounded-xl shadow h-full">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category}</h2>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </div>

  )
}

export default Skills