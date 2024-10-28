import React from 'react'

interface BulletListProps {
  bullets: string[]
  onBulletChange: (bulletIndex: number, value: string) => void
}

const BulletList: React.FC<BulletListProps> = ({ bullets, onBulletChange }) => {
  return (
    <>
      {bullets.map((bullet, bulletIndex) => (
        <div key={bulletIndex} className="bullet-item">
          <input
            type="text"
            placeholder="Start your bullet list here..."
            value={bullet}
            onChange={(e) => onBulletChange(bulletIndex, e.target.value)}
            className="bullet-input"
          />
        </div>
      ))}
    </>
  )
}

export default BulletList
