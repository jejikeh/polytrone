import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Polytrone</title>

      </Head>

      <style jsx>
        {`

        h1 {
          background: #b9b9b9;
          color: #121212;
        }

        `}
      </style>


      <Link href="/room">
        <a>
          <h1>Hello fuck you</h1>
        </a>
      </Link>
    </div>
  )
}
