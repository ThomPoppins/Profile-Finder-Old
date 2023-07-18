import styles from '../styles/Layout.module.css'
import LayoutNavigation from './layoutnavigation.js'

export default function LayoutAccount({ children }) {
  return (
    <div>
      <div className="flex min-h-screen bg-violet-900 pt-16 pb-16">
        <div className="m-auto bg-slate-50 lg:rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          <div className={styles.imgStyle}>
            <div className={styles.cartoonImg}></div>
            <div className={styles.cloud_one}></div>
            <div className={styles.cloud_two}></div>
          </div>
          <div className="right flex flex-col justify-evenly">
            <div className="text-center py-10 bg-slate-50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}