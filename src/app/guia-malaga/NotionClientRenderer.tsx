'use client'

import { ComponentProps } from 'react'
import { NotionRenderer } from 'react-notion-x'

export function NotionClientRenderer(
	props: ComponentProps<typeof NotionRenderer>,
) {
	return <NotionRenderer {...props} />
}
