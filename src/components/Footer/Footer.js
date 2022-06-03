import { Anchor, Group, Modal, Text } from '@mantine/core';
import React, { useState } from 'react';
import { CircleTriangle } from 'tabler-icons-react';
import GradSpan from '../GradSpan/GradSpan';
import licenses from './licenses';

export default function Footer() {
	const [licenseOpen, setLicenseOpen] = useState(false);

	return (
		<>
			<Group noWrap spacing='xl' position='center'>
				<Anchor
					role='button'
					onClick={() => setLicenseOpen(true)}
					color='dimmed'
				>
					<CircleTriangle size={16} /> LICENSE T_XO_XI_IO
				</Anchor>

				<Text>
					MADE BY <GradSpan>TOMER ATAR</GradSpan>
				</Text>
			</Group>

			{/* modals */}
			<Modal
				size='xl'
				centered
				opened={licenseOpen}
				onClose={() => setLicenseOpen(false)}
				title='LICENSES'
			>
				<Text>
					<pre>{licenses}</pre>
				</Text>
			</Modal>
		</>
	);
}
