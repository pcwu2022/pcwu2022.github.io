import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'
import DisplaySection, { validateContent } from '../components/DisplaySection'
import ProjectFilter, { emptyFilters, applyFilters } from '../components/ProjectFilter'
import type { FilterState } from '../components/ProjectFilter'
import projectsContent from '../content/myProjects.json'

const MyProjects = () => {
  const [filters, setFilters] = useState<FilterState>(emptyFilters)

  const allItems = projectsContent.items.map(validateContent)
  const filteredItems = applyFilters(allItems, filters)

  return (
    <div className='m-0 p-0 min-h-screen bg-transparent'>
      <Links />
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12'>
        <div className='p-4 md:p-6'>
          {/* <Link
            to="/projects"
            className="block mb-8 px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-650 hover:to-indigo-650 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 text-lg text-center hover:-translate-y-0.5 border border-blue-500/25"
          >
            View My Creations Online
          </Link> */}
          <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-8'>
            {projectsContent.title}
          </h2>
          <Link
            to="https://pcwu2022.github.io/projects/"
            className="block mb-8 px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-650 hover:to-indigo-650 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 text-lg text-center hover:-translate-y-0.5 border border-blue-500/25"
          >
            View My Live Projects
          </Link>

          {/** Filter Panel */}
          <ProjectFilter
            filters={filters}
            onChange={setFilters}
            totalCount={allItems.length}
            filteredCount={filteredItems.length}
          />

          {/** Project List */}
          <div className="space-y-6">
            {filteredItems.length === 0 ? (
              <div className="bg-slate-900/40 backdrop-blur-md border border-blue-950/45 rounded-2xl p-10 text-center shadow-xl shadow-black/25">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-400 text-sm">No projects match your current filters.</p>
                <button
                  onClick={() => setFilters(emptyFilters())}
                  className="mt-4 text-xs text-blue-400 hover:text-blue-300 border border-blue-800/60 hover:border-blue-600 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-slate-800/50"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredItems.map((item) => (
                <DisplaySection key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
