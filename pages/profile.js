import { getSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

const profile = () => {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile</h3>

      <Link href={'/'}>Home Page</Link>
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