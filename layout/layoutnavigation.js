export default function LayoutNavigation({ children }) {
  return (
    <div className="flex h-20 bg-teal-300 absolute top-0 left-0 right-0 z-10">
      {children}
    </div>
  )
}