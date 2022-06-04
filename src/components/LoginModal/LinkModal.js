import {
	ActionIcon,
	Box,
	Card,
	Center,
	Divider,
	Group,
	LoadingOverlay,
	Overlay,
	Stack,
	Text,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { ArrowNarrowLeft, Refresh } from 'tabler-icons-react';

export default function LinkModal({ onClose }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 5000);
		}
	}, [loading]);

	return (
		<>
			<Overlay blur={2} zIndex={0}></Overlay>
			<Center
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 1,
				}}
			>
				<Card shadow='sm'>
					<Card.Section>
						<Stack p='md'>
							<Group noWrap>
								<ActionIcon onClick={onClose}>
									<ArrowNarrowLeft />
								</ActionIcon>
								<Text size='sm'>LINK NEURAL RECEIVER</Text>
							</Group>
							<Divider />
							<Stack
								p='md'
								sx={{
									position: 'relative',
									height: '140px',
								}}
							>
								<LoadingOverlay
									visible={loading}
									loaderProps={{ color: 'purple' }}
								/>
								{!loading && (
									<Box
										sx={(theme) => ({
											backgroundColor:
												theme.colors.gray[1],
											borderRadius: theme.radius.sm,
										})}
										p='xs'
									>
										<Text color='dimmed' size='xs'>
											<Group noWrap position='apart'>
												<span>NO CHIPS FOUND</span>
												<ActionIcon
													onClick={() =>
														setLoading(true)
													}
												>
													<Refresh size={16} />
												</ActionIcon>
											</Group>
										</Text>
									</Box>
								)}
							</Stack>
						</Stack>
					</Card.Section>
					<Card.Section></Card.Section>
				</Card>
			</Center>
		</>
	);
}
