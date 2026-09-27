import Spinner from '@/components/ui/Spinner'

export const Loading = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading page">
    <span className="sr-only">Loading page&hellip;</span>
    <Spinner size="lg" />
  </div>
)

export default Loading
