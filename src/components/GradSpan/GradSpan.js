import { Text } from '@mantine/core';
import React from 'react';

export default function GradSpan({ children, ...rest }) {
	return (
		<Text
			component='span'
			variant='gradient'
			gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
			weight={700}
			size='inherit'
			{...rest}
		>
			{children}
		</Text>
	);
}
