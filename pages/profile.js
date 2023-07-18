import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import LayoutIndex from "../layout/layoutindex";
import { getSession, useSession } from "next-auth/react"


export default function Profile() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <LayoutIndex>
        <section className="container mx-auto text-center py-20">
          <h3 className="text-4xl font-bold text-white">{session.user.email}</h3>
          <br />
          <br />
          <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/'}>Go to homepage</Link>
        </section>

      </LayoutIndex>
    )
  }


}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}