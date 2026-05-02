import React from 'react'
import Display from './Display'
import RichText from './RichText'

export type DisplayContent = {
  id: string
  title: string
  supporting?: string[]
  images?: Array<{ src: string; alt: string }>
  links?: Array<{ href: string; label: string }>
  body?: string[]
}

const DisplaySection = ({ item }: { item: DisplayContent }) => {
  return (
    <Display
      id={item.id}
      title={item.title}
      supporting={item.supporting ?? []}
      images={item.images ?? []}
      links={item.links ?? []}
    >
      <RichText paragraphs={item.body ?? []} />
    </Display>
  )
}

export default DisplaySection
