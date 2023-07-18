import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import LayoutIndex from "../layout/layoutindex";
import { getSession, useSession } from "next-auth/react"
import Image from "next/image";
import AddProfileDataToUserSession from "../components/AddProfileDataToUserSession";


export default function Profile() {
  const { data: session, status } = useSession()
  if (session) {
    if (!session.user.profile) {
      AddProfileDataToUserSession(session)
    }
    // TODO remove console.log
    console.log(session.user);
    return (
      <LayoutIndex>
        <section className="container mx-auto text-center py-20">
          <h3 className="text-4xl font-bold text-white">{session.user.firstname + ' ' + session.user.lastname}</h3>
          <div className="flex justify-center mt-5">
            <Image
              src={session.user.profile.profileimage}
              width={500}
              height={500}
              alt="Profielfoto"
            />
          </div>
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