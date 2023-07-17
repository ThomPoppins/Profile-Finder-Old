import styles from '../styles/Layout.module.css'
import Navigation from './layoutnavigation.js'

export default function Account({ children }) {
  return (
    <div>
      <Navigation></Navigation>
      <div className="flex min-h-screen bg-violet-900">
        <div className="m-auto bg-slate-50 lg:rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          <div className={styles.imgStyle}>
            <div className={styles.cartoonImg}></div>
            <div className={styles.cloud_one}></div>
            <div className={styles.cloud_two}></div>
          </div>
          <div className="right flex flex-col justify-evenly">
            <div className="text-center py-10 bg-slate-50 md:rounded-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}