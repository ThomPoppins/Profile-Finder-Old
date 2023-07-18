import LayoutIndex from "../layout/layoutindex"
import Link from "next/link"

export default function Demo() {

  return (
    <LayoutIndex>
      <section className="container mx-auto text-center py-20">
        <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/'}>Go to homepage</Link>
      </section>
    </LayoutIndex>
  )
}

