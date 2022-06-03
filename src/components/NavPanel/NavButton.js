import { UnstyledButton } from '@mantine/core';
import React, { forwardRef } from 'react';

export default forwardRef(function NavButton({ children, ref, ...rest }) {
	return (
		<UnstyledButton
			ref={ref}
			sx={(theme) => ({
				display: 'block',
				width: '100%',
				padding: theme.spacing.sm,
				borderRadius: theme.radius.sm,
				fontSize: theme.fontSizes.sm,
				color:
					theme.colorScheme === 'dark'
						? theme.colors.dark[0]
						: theme.black,

				'&:hover': {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
			{...rest}
		>
			{children}
		</UnstyledButton>
	);
});
