export interface ContentBlock {
  heading: string
  bullets: string[]
}

export interface SlideContent {
  title: string
  content_blocks: ContentBlock[]
}
