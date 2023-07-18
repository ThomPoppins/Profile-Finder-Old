import styles from '../styles/Layout.module.css'


export default function LayoutIndex({ children }) {
  return (
    <div>
      <div className="flex items-center min-h-screen bg-violet-900 ">
        {children}
      </div>
    </div>
  )
}