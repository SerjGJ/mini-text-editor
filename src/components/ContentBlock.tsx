import React from 'react'
import BulletList from './BulletList'
import './SlideEditor.css'

interface ContentBlockProps {
  block: {
    heading: string
    bullets: string[]
  }
  onHeadingChange: (value: string) => void
  onBulletChange: (bulletIndex: number, value: string) => void
  addBullet: () => void
  addHeading: () => void
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  block,
  onHeadingChange,
  onBulletChange,
  addBullet,
  addHeading,
}) => {
  return (
    <div className="content-block">
      <input
        type="text"
        placeholder="Name your bullet list…"
        value={block.heading}
        onChange={(e) => onHeadingChange(e.target.value)}
        className="heading-input"
      />
      <BulletList bullets={block.bullets} onBulletChange={onBulletChange} />
      <div className="button-group">
        <button onClick={addBullet}>Add Bullet</button>
        <button onClick={addHeading}>Add Heading</button>
      </div>
    </div>
  )
}

export default ContentBlock
