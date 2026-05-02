import React from 'react'
import InnerLink from './InnerLink'

type RichTextProps = {
  paragraphs: string[]
  paragraphClassName?: string
}

const TOKEN_REGEX = /\[\[([^\]]+)\]\]|\*\*([^*]+)\*\*|\*([^*]+)\*/g

const parseInline = (text: string) => {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let keyIndex = 0

  while ((match = TOKEN_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    if (match[1]) {
      const [targetPart, aliasPart] = match[1].split('|')
      const target = (targetPart || '').trim()
      const alias = (aliasPart ?? targetPart ?? '').trim()
      const label = alias || target

      if (target) {
        nodes.push(
          <InnerLink key={`link-${keyIndex++}`} to={target}>
            {label}
          </InnerLink>
        )
      } else {
        nodes.push(label)
      }
    } else if (match[2]) {
      nodes.push(
        <strong key={`bold-${keyIndex++}`}>{match[2]}</strong>
      )
    } else if (match[3]) {
      nodes.push(
        <em key={`italic-${keyIndex++}`}>{match[3]}</em>
      )
    }

    lastIndex = TOKEN_REGEX.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

const RichText = ({ paragraphs, paragraphClassName = 'mb-4' }: RichTextProps) => {
  if (!paragraphs || paragraphs.length === 0) return null

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        if (!paragraph.trim()) return null
        return (
          <div key={index} className={paragraphClassName}>
            {parseInline(paragraph)}
          </div>
        )
      })}
    </>
  )
}

export default RichText
