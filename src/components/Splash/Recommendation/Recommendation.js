import { Avatar, Blockquote, Card, Group, Text } from '@mantine/core';
import React from 'react';

export default function Recommendation({ children, cite, avatar, flag }) {
	return (
		<Card sx={{ margin: '1rem', overflow: 'unset' }} shadow='sm'>
			<Card.Section p='1rem'>
				<Group noWrap sx={{ alignItems: 'start' }}>
					<Avatar src={avatar} size='lg' radius='50%' mt='1rem' />
					<Blockquote
						cite={<Text sx={{ fontSize: '10px' }}>{cite}</Text>}
					>
						<Text sx={{ fontSize: '10px' }}>{children}</Text>
					</Blockquote>
				</Group>
			</Card.Section>
		</Card>
	);
}
