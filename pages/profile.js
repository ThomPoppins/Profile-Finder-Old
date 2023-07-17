import { getSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

const profile = () => {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold ">Profile</h3>
      <br />
      <br />
      <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/'}>Go to homepage</Link>
    </section>
  )
}

export default profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  // authorize user return session
  return {
    props: { session }
  }
}