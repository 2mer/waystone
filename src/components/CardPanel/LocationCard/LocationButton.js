import { Image, UnstyledButton } from '@mantine/core';
import React from 'react';

export default function LocationButton({
	src,
	selected = false,
	size = '60px',
	onClick,
}) {
	return (
		<UnstyledButton
			onClick={onClick}
			sx={(theme) => ({
				transition: 'all 255ms',
				...(selected
					? {
							boxShadow: `0 0 0 1px white, 0 0 0 3px ${theme.colors.blue[5]}`,
							borderRadius: theme.radius.md,
					  }
					: {}),
			})}
		>
			<Image
				src={src}
				width={size}
				height={size}
				fit='cover'
				radius='md'
			/>
		</UnstyledButton>
	);
}
