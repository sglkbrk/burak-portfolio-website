import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh_-_90px)] w-full flex-col items-center justify-center gap-4">
      <h2>404 Not Found</h2>
      <p className="text-gray-500">I think you ve lost your way.</p>
      <button>
        <Link href="/">Back to Homepage</Link>
      </button>
    </section>
  );
}
