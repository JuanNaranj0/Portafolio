import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectCard from './ProjectCard'

test('renders project card title and description', () => {
  render(<ProjectCard title="Test Project" description="A test project" tech={["React"]} />)
  expect(screen.getByText('Test Project')).toBeInTheDocument()
  expect(screen.getByText('A test project')).toBeInTheDocument()
})
