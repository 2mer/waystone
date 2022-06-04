import {
	BackgroundImage,
	Button,
	Card,
	Image,
	Stack,
	Text,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { ThreeDCubeSphere } from 'tabler-icons-react';
import LinkModal from './LinkModal';

export default function SingularityForm({ open }) {
	const [linkClicked, setLinkClicked] = useState(false);

	useEffect(() => {
		if (!open) {
			setLinkClicked(false);
		}
	}, [open]);

	return (
		<Card withBorder>
			<Card.Section>
				<BackgroundImage src='galaxy.png' sx={{ position: 'relative' }}>
					<Stack
						spacing='sm'
						align='center'
						p='4rem 0 2rem 0'
						sx={{
							filter: 'drop-shadow(0px 0px 6px white) drop-shadow(0px 0px 20px white)',
						}}
					>
						<Image src='singularity.svg' width='100px' />
						<Text sx={{ fontSize: '20px' }} weight={700}>
							SINGULARITY
						</Text>
						<Button
							rightIcon={<ThreeDCubeSphere />}
							onClick={() => {
								setLinkClicked(true);
							}}
							size='lg'
							variant='gradient'
							gradient={{
								from: 'orange',
								to: 'purple',
								deg: 45,
							}}
							mt='md'
						>
							LINK
						</Button>
					</Stack>
					{linkClicked && (
						<LinkModal onClose={() => setLinkClicked(false)} />
					)}
				</BackgroundImage>
			</Card.Section>
		</Card>
	);
}
