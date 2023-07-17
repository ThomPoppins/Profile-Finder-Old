import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import LogRocket from 'logrocket';

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <div>
      {LogRocket.init('ti1uwj/profile-finder-hmwx0')};
      {// This is an example script - don't forget to change it!
        LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
          name: 'Thom Poppins',
          email: 'thompoppins@example.com',

          // Add your own custom user variables here, ie:
          subscriptionType: 'pro'
        })}

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}