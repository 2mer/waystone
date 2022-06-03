import {
	Alert,
	Button,
	Collapse,
	Divider,
	Group,
	Progress,
	Stack,
	Text,
} from '@mantine/core';
import React, { useState } from 'react';
import { AlertTriangle, Server } from 'tabler-icons-react';
import NavButton from './NavButton';

export default function NavPanel() {
	const [alertClosed, setAlertClosed] = useState(false);
	const [alertsOpen, setAlertsOpen] = useState(true);

	return (
		<Group
			direction='column'
			align='stretch'
			sx={{ height: '100%', justifyContent: 'space-between' }}
		>
			{/* navigation actions */}
			<Stack>
				<NavButton
					onClick={() => {
						document
							.querySelector('#wawj')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					DEEP DIVE
				</NavButton>
			</Stack>

			{/* statuses */}
			<Stack>
				<Divider
					labelPosition='left'
					label={
						<Button
							variant='outline'
							color='yellow'
							onClick={() => setAlertsOpen((prev) => !prev)}
							leftIcon={<AlertTriangle />}
						>
							ISSUES
						</Button>
					}
				/>

				<Collapse in={alertsOpen}>
					<Stack>
						{!alertClosed && (
							<Alert
								icon={<AlertTriangle />}
								color='yellow'
								title={<Text size='xs'>LEGACY BROWSER</Text>}
								onClose={() => setAlertClosed(true)}
								withCloseButton
							>
								<Text size='xs' sx={{ opacity: 0.5 }}>
									YOU ARE USING AN OUTDATED BROWSER! SOME
									FEATURES MAY NOT BEHAVE AS EXPECTED
								</Text>
							</Alert>
						)}
						<Alert
							icon={<Server />}
							color='yellow'
							title={<Text size='xs'>SLOW CONNECTION</Text>}
						>
							<Text size='xs' sx={{ opacity: 0.5 }}>
								YOUR CONNECTION TO THE GCDN IS SLOWER THAN USUAL
							</Text>
							<Progress
								color='yellow'
								value={100}
								animate
								label='CONNECTING'
								size='xl'
							/>
						</Alert>
					</Stack>
				</Collapse>
			</Stack>
		</Group>
	);
}
