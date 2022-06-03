import {
	Box,
	Button,
	Card,
	Divider,
	Group,
	Image,
	Stack,
	Text,
} from '@mantine/core';
import React, { useState } from 'react';
import LocationButton from './LocationButton';
import { CaretUp } from 'tabler-icons-react';

export default function LocationCard({ location, reverse = false }) {
	const [selectedImage, setSelectedImage] = useState(0);

	return (
		<Group
			spacing='md'
			position='center'
			style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
		>
			<Card shadow='sm' radius='lg'>
				<Card.Section>
					<Image
						src={
							`locations/` +
							location.images.folder +
							`/${selectedImage}.jpg`
						}
						width='400px'
					/>
				</Card.Section>
			</Card>

			{/* info */}
			<Stack spacing='md' align={reverse ? 'flex-end' : 'flex-start'}>
				{/* image picker */}
				<Card
					withBorder
					shadow='sm'
					radius='md'
					{...(reverse ? { mr: '-60px' } : { ml: '-60px' })}
				>
					<Card.Section>
						<Group spacing='8px' p='8px'>
							{Array(location.images.length)
								.fill(undefined)
								.map((_, index) => {
									return (
										<LocationButton
											size='40px'
											key={index}
											src={
												`locations/` +
												location.images.folder +
												`/${index}.jpg`
											}
											onClick={() =>
												setSelectedImage(index)
											}
											selected={selectedImage === index}
										/>
									);
								})}
						</Group>
					</Card.Section>
				</Card>
				{/* image actions */}
				<Card shadow='sm' withBorder>
					<Card.Section>
						<Box p='md'>
							<Text size='lg' mb='2rem' weight={500}>
								{location.name}
							</Text>
							<Text
								size='sm'
								style={{ maxWidth: '30vw', opacity: 0.8 }}
							>
								{location.description.toUpperCase()}
							</Text>
						</Box>
					</Card.Section>
					<Card.Section p='md'>
						<Divider
							label={
								<Button
									rightIcon={<CaretUp />}
									variant='gradient'
									gradient={{
										from: 'teal',
										to: 'blue',
										deg: 60,
									}}
								>
									JUMP
								</Button>
							}
							labelPosition='center'
						/>
					</Card.Section>
				</Card>
			</Stack>
		</Group>
	);
}
