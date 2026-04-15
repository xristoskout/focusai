import { redirect } from 'next/navigation'

// Root page redirects to default locale /en
// The middleware handles this for most cases,
// but this is a safety fallback.
export default function RootPage() {
  redirect('/en')
}
