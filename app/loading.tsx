export default function Loading() {
  return (
    <main
      aria-busy='true'
      aria-live='polite'
      className='min-h-screen grid place-items-center bg-background text-foreground'
    >
      <div className='flex flex-col items-center gap-6 p-8'>
        <div className='relative w-24 h-24'>
          <div className='absolute inset-0 rounded-full border-4 border-foreground/10' />
          <div
            className='absolute inset-0 rounded-full border-4 border-foreground border-t-transparent animate-spin'
            style={{ animationDuration: "1.1s" }}
          />
          <div className='absolute inset-3 rounded-full bg-gradient-to-tr from-foreground/10 to-transparent blur-xl animate-pulse' />
        </div>

        <div className='text-center'>
          <h1 className='text-xl sm:text-2xl font-semibold tracking-tight'>
            Preparing your experience
          </h1>
          <p className='text-sm sm:text-base text-foreground/60 mt-1'>
            This won’t take long.
          </p>
        </div>

        <div className='flex items-center gap-2' aria-hidden>
          <span
            className='w-2 h-2 rounded-full bg-foreground/50 animate-bounce inline-block'
            style={{ animationDelay: "0ms" }}
          />
          <span
            className='w-2 h-2 rounded-full bg-foreground/50 animate-bounce inline-block'
            style={{ animationDelay: "150ms" }}
          />
          <span
            className='w-2 h-2 rounded-full bg-foreground/50 animate-bounce inline-block'
            style={{ animationDelay: "300ms" }}
          />
        </div>

        <div className='w-64 sm:w-80 h-1.5 rounded-full bg-foreground/10 overflow-hidden'>
          <div className='h-full rounded-full progress-bar' />
        </div>
      </div>
    </main>
  );
}
