import { useState } from 'react'

type Category = 'Teaching' | 'Design' | 'Admin'
type Task = { id: string; title: string; category: Category; completed: boolean }
const initialTasks: Task[] = [
  { id: 'slides', title: 'Prepare class slides', category: 'Teaching', completed: false },
  { id: 'figma', title: 'Review Figma design', category: 'Design', completed: true },
  { id: 'reminder', title: 'Send workshop reminder', category: 'Admin', completed: true },
  { id: 'lesson', title: 'Plan the next lesson', category: 'Teaching', completed: false },
]

function TaskCard({ task, onToggle }: { task: Task; onToggle: (id: string) => void }) {
  return <li>
    <label className={`task-card${task.completed ? ' completed' : ''}`}>
      <input className="task-input" type="checkbox" checked={task.completed}
        onChange={() => onToggle(task.id)} aria-labelledby={`${task.id}-title`} />
      <span className="task-checkbox" aria-hidden="true">{task.completed ? '✓' : ''}</span>
      <span className="task-content">
        <span className="task-title" id={`${task.id}-title`}>{task.title}</span>
        <span className={`pill category-${task.category.toLowerCase()}`}>{task.category}</span>
      </span>
    </label>
  </li>
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [interacted, setInteracted] = useState(false)
  const completed = tasks.filter(task => task.completed).length
  function toggleTask(id: string) {
    setTasks(current => current.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    setInteracted(true)
  }
  function resetDemo() { setTasks(initialTasks); setInteracted(false) }
  return <main className="daily-focus">
    <header>
      <span className="pill state-pill">{interacted ? 'STATE B • after tapping a task' : 'STATE A • starting screen'}</span>
      <h1>{'Good morning,  Bhavina'}</h1>
      <p className="date">Thursday, 8 October</p>
    </header>
    <section className="progress-card" aria-labelledby="progress-heading">
      <div className="progress-heading">
        <h2 id="progress-heading">Today’s progress</h2>
        <span className="progress-count" aria-live="polite" aria-atomic="true">{completed} of {tasks.length}</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Completed priorities"
        aria-valuemin={0} aria-valuemax={tasks.length} aria-valuenow={completed}
        aria-valuetext={`${completed} of ${tasks.length} priorities complete`}>
        <div className="progress-fill" style={{ width: `${completed / tasks.length * 100}%` }} />
      </div>
    </section>
    <section className="priorities" aria-labelledby="priorities-heading">
      <h2 id="priorities-heading">Your priorities</h2>
      <ul className="task-list">{tasks.map(task => <TaskCard key={task.id} task={task} onToggle={toggleTask} />)}</ul>
    </section>
    <button className="reset-button" type="button" onClick={resetDemo}>Reset demo</button>
  </main>
}
