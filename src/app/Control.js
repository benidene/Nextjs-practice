'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={'/update/' + id}>update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: 'DELETE' };
                fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
                  .then((resp) => resp.json)
                  .then((result) => router.push('/'), router.refresh());
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
