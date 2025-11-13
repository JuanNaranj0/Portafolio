export default function ProjectCard({ title, description, href, tech = [] }) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm flex flex-col justify-between">
      <div>
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-gray-500 space-x-2">
          {tech.map((t) => (
            <span key={t} className="inline-block bg-gray-100 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        {href ? (
          <a className="text-blue-600 text-sm" href={href} target="_blank" rel="noreferrer">Ver proyecto</a>
        ) : null}
      </div>
    </article>
  )
}
