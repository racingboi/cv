
export default function ProfilePicture({ src, alt }) {
  return (
    <div className="flex flex-col items-center">
    <img className="rounded-full w-32 h-32 mb-4" src={src} alt={alt} />
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">YOUR NAME</h2>
      <p className="text-sm">YOUR JOB POST</p>
    </div>
  </div>
  )
}
