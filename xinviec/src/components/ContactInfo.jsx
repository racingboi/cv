
export default function ContactInfo({ label, value }) {
  return (
    <p className="mb-2">
    <strong>{label}</strong><br />{value}
  </p>
  )
}
