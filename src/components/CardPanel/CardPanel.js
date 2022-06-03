import { Box, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import LocationCard from './LocationCard/LocationCard';
import locations from './locations';

export default function CardPanel() {
	return (
		<Stack align='center' spacing='10vh'>
			<Title order={2} id='wawj' sx={{ scrollMargin: '150px' }}>
				<Text
					component='span'
					variant='gradient'
					gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
					weight={700}
					size='inherit'
				>
					WHERE
				</Text>{' '}
				ARE WE JUMPING
				<Text
					component='span'
					variant='gradient'
					gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
					weight={700}
					size='inherit'
				>
					?
				</Text>
			</Title>
			<Stack spacing='20vh'>
				{locations.map((l, index) => (
					<LocationCard
						location={l}
						key={l.name}
						reverse={index % 2 === 1}
					/>
				))}
			</Stack>
		</Stack>
	);
}
