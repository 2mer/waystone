import {
	Badge,
	Blockquote,
	Box,
	Button,
	Chip,
	Divider,
	Group,
	Image,
	ScrollArea,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import React from 'react';
import GradSpan from '../GradSpan/GradSpan';
import Recommendation from './Recommendation/Recommendation';

export default function Splash() {
	return (
		<Stack spacing='md' align='center' mt='5vh'>
			<Image src='waystone.svg' width='120px' />
			<Title order={1} style={{ fontSize: '60px' }}>
				<GradSpan>WAY</GradSpan>STONE
			</Title>

			<Text order={2} color='dimmed'>
				THE O_I PARTICLE GATEWAY CDN, ENTIRELY FREE
			</Text>

			<Group noWrap mb='3rem'>
				<Badge>FAST</Badge>
				<Badge>FREE</Badge>
				<Badge>SAFE</Badge>
			</Group>

			<Group mb='3rem'>
				<Button
					size='lg'
					radius='xl'
					variant='gradient'
					gradient={{ from: 'teal', to: 'blue', deg: 60 }}
					onClick={() => {
						document
							.querySelector('#wawj')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					LETS JUMP
				</Button>
			</Group>

			{/* recommendations */}
			<Divider
				my='xs'
				label='RECOMMENDATIONS'
				labelPosition='center'
				sx={{ width: '100%' }}
			/>
			<Box
				sx={{
					width: '100%',
					overflow: 'hidden',
					position: 'relative',
					height: '300px',
				}}
			>
				<Box sx={{ position: 'absolute', inset: 0 }}>
					<ScrollArea sx={{ width: '100%' }}>
						<Group noWrap spacing='xl' align='start'>
							<Recommendation
								avatar='avatars/probe.png'
								cite='KOREX AUXILLARY PROBE V O_X'
							>
								LOCATIONS MEET SPECIFIED DESCRIPTION, JUMP
								COORDINATES HAVE NO NOTICEABLE BOOBYTRAPS
							</Recommendation>

							<Recommendation
								avatar='avatars/p1.jpg'
								cite='KOREX AUXILLARY PROBE V O_X'
							>
								AMAZING TECHNOLOGY, I DONT SEE MYSELF GOING BACK
								TO GALACTIC TRAFFIC AFTER THIS
							</Recommendation>

							<Recommendation
								avatar='avatars/a2.jpg'
								cite='NA LIMA COL'
							>
								SPATIAL RECONSTRUCTION REPORT ACCURATE _ _ _
								SURPRISING
							</Recommendation>

							<Recommendation
								avatar='avatars/e1.jpg'
								cite='P_L_A_N_A'
							>
								DIMENSIONAL SHIFTING FEATURE WORKS GREAT, A LOT
								FASTER THAN MARKET ALTERNATIVES
							</Recommendation>
						</Group>
					</ScrollArea>
				</Box>
			</Box>
			<Divider my='xs' sx={{ width: '100%' }} />
		</Stack>
	);
}
