import { useState } from "react"

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFitlers() {
    const [currentFilter, setCurrentFitler] = useState('all')

    const handleClick = (newFilter) => {
        console.log(newFilter)
        setCurrentFitler(newFilter)
    }

  return (
    <div className='project-filter'>
        <nav>
        {filterList.map((f) => (
            <button key={f}
                onClick={() => handleClick(f)}
                className={currentFilter === f ? 'active' : ''} 
                //dynamic class name - check if current filter is active
                //if current filter matches f, then class name will be 'active'
            >
                {f}
            </button>
        ))}
        </nav>
    </div>
  )
}
