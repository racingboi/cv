
export default function WorkExperience({ period, company, description}) {
  return (
    <div className="mb-4">
    <p className="font-bold">{period}</p>
    <p className="font-semibold">{company}</p>
    <p>{description}</p>
  </div>
  )
}
