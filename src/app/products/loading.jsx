
const loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Skeleton cards matching the products layout */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="p-4 border-b border-gray-200 dark:border-gray-700 rounded-lg w-full animate-pulse"
        >
          {/* Skeleton for title */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-3 w-3/4"></div>
          
          {/* Skeleton for description - multiple lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default loading