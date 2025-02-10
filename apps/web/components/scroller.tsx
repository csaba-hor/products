"use client"

import { useCallback, useRef, type ReactNode, useState } from "react"

interface InfiniteScrollProps {
  loadMore: () => void
  hasMore: boolean
  isLoading: boolean
  children: ReactNode
}

export function InfiniteScroll({ loadMore, hasMore, isLoading, children }: InfiniteScrollProps) {
  const [scrollFailed, setScrollFailed] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        } else if (!entries[0].isIntersecting && hasMore) {
          setScrollFailed(true)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore, loadMore, isLoading],
  )

  const handleLoadMore = () => {
    setScrollFailed(false)
    loadMore()
  }

  return (
    <div>
      {children}
      <div ref={lastElementRef}>
        {isLoading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
        {scrollFailed && hasMore && !isLoading && (
          <div className="text-center py-4">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
      </div>
    </div>
  )
}

