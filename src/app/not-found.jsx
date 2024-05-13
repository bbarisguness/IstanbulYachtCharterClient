import React from 'react'

export async function generateMetadata({ params, searchParams }) {
  return {
    title: '404 Not Found',
    description: 'not found'
  }
}

export default function NotFound() {
  return (
    <div>404 not found</div>
  )
}
