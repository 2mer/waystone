import { Image } from '@mantine/core'
import React from 'react'

export default function FlagIcon(props) {
	return (
		<Image {...props} radius="xs" style={{ boxShadow: '0 0 0 1px white, 0 0 0 2px currentColor', borderRadius: '2px' }} />
	)
}
