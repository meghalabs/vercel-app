// src/app/ssr-time/page.tsx
export default async function SSRTime() {
  const now = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>SSR in App Router</h1>
      <p>This time was generated on the server: {now}</p>
    </div>
  );
}

// Force server-side rendering (no caching)
export const dynamic = 'force-dynamic';
