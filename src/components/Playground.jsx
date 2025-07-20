import React from 'react'

const problems = [
  {
    id: 1,
    title: 'Reverse a String',
    description: 'Given a string, reverse the characters without using built-in reverse().'
  },
  {
    id: 2,
    title: 'Two Sum Problem',
    description: 'Find two numbers in an array that add up to a target value.'
  },
  {
    id: 3,
    title: 'Anagram Checker',
    description: 'Check if two strings are anagrams of each other.'
  },
  {
    id: 4,
    title: 'Linked List Cycle',
    description: 'Detect if a linked list has a cycle.'
  }
]

const Playground = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">🚀 Dev Playground</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {problems.map(problem => (
          <li
            key={problem.id}
            className="flex flex-col gap-2 border-b border-gray-200 pb-4"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{problem.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{problem.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-md text-sm">
                Explain
              </button>
              <button className="border border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-1 rounded-md text-sm">
                Try
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playground
