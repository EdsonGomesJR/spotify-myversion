'use client'

import { useRouter } from 'next/navigation'

interface ListItemProps {
  image: string
  name: string
  href: string
}
export function ListItem({ href, image, name }: ListItemProps) {
  const router = useRouter()

  const onClick = () => {
    router.push(href)
  }
  return (
    <button className="group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/20 pr-4 transition">
      <div className="relative min-h-[64px] min-w-[64px]"></div>
      ListItem
    </button>
  )
}
