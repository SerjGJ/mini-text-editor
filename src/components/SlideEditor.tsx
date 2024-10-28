import React, { useState } from 'react'
import { ContentBlock, SlideContent } from '../types'
import './SlideEditor.css'
import BulletList from './BulletList'

const SlideEditor: React.FC = () => {
  const [title, setTitle] = useState('')
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
    {
      heading: 'Name your bullet list…',
      bullets: ['Start your bullet list here...'],
    },
  ])

  const addBullet = (index: number) => {
    const updatedBlocks = [...contentBlocks]
    updatedBlocks[index].bullets.push('')
    setContentBlocks(updatedBlocks)
  }

  const addHeading = () => {
    const newBlock: ContentBlock = {
      heading: 'Name your bullet list…',
      bullets: ['Start your bullet list here...'],
    }
    setContentBlocks([...contentBlocks, newBlock])
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleHeadingChange = (index: number, value: string) => {
    const updatedBlocks = [...contentBlocks]
    updatedBlocks[index].heading = value
    setContentBlocks(updatedBlocks)
  }

  const handleBulletChange = (
    blockIndex: number,
    bulletIndex: number,
    value: string
  ) => {
    const updatedBlocks = [...contentBlocks]
    updatedBlocks[blockIndex].bullets[bulletIndex] = value
    setContentBlocks(updatedBlocks)
  }

  const handleFocusOut = () => {
    const slideContent: SlideContent = {
      title,
      content_blocks: contentBlocks,
    }
    console.log(JSON.stringify(slideContent, null, 2))
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain').trim()
    const lines = text.split('\n')

    const updatedBlocks = [...contentBlocks]

    if (lines.length > 0) {
      updatedBlocks.push({
        heading: lines[0] || 'Name your bullet list…',
        bullets: lines
          .slice(1)
          .map((line) => line || 'Start your bullet list here...'),
      })
    }

    setContentBlocks(updatedBlocks)
  }

  return (
    <div className="slide-editor" onBlur={handleFocusOut}>
      <h2>Edit slide</h2>
      <input
        type="text"
        placeholder="Add a title for your slide…"
        value={title}
        onChange={handleTitleChange}
        onPaste={handlePaste}
        className="title-input"
      />

      {contentBlocks.map((block, blockIndex) => (
        <div key={blockIndex} className="content-block">
          <input
            type="text"
            placeholder="Name your bullet list…"
            value={block.heading}
            onChange={(e) => handleHeadingChange(blockIndex, e.target.value)}
            onPaste={handlePaste}
            className="heading-input"
          />

          <BulletList
            bullets={block.bullets}
            onBulletChange={(bulletIndex, value) =>
              handleBulletChange(blockIndex, bulletIndex, value)
            }
          />

          <div className="button-group">
            <button onClick={() => addBullet(blockIndex)}>Add Bullet</button>
            <button onClick={addHeading}>Add Heading</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SlideEditor
