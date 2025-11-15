import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

describe('ProjectCard', () => {
  it('renders title and tech tags', () => {
    render(<ProjectCard title="Test Project" description="Desc" tech={["React","Tailwind"]} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
  })
})
