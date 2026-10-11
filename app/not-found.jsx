export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-6xl">Page not found</h1>
        <p className="mt-4 text-muted">That page does not exist. Head back to the portfolio.</p>
        <a href="/" className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-bg">
          Back to home
        </a>
      </div>
    </main>
  );
}
