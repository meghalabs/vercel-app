// src/app/isr-time/page.tsx
async function getTime() {
  const now = new Date().toLocaleTimeString();
  return { now };
}

export default async function ISRTime() {
  const { now } = await getTime();

  return (
    <div>
      <h1>ISR in App Router</h1>
      <p>This page was statically generated at: {now}</p>
    </div>
  );
}

// Enable revalidation every 10 seconds
export const revalidate = 10;
