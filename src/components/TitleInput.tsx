import React from 'react'

interface TitleInputProps {
  title: string
  onTitleChange: (value: string) => void
}

const TitleInput: React.FC<TitleInputProps> = ({ title, onTitleChange }) => {
  return (
    <input
      type="text"
      placeholder="Add a title for your slide…"
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
      className="title-input"
    />
  )
}

export default TitleInput
