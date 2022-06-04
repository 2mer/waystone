import { Modal, Stack, Text } from '@mantine/core';
import React from 'react';
import SingularityForm from './SingularityForm';

export default function LoginModal({ open, onClose }) {
	return (
		<Modal
			centered
			opened={open}
			onClose={onClose}
			title='SIGN IN TO SINGULARITY'
			size='md'
		>
			<Stack>
				<Text color='dimmed' size='xs'>
					PLEASE LINK INTO SINGULARITY TO JUMP
				</Text>
				<SingularityForm />
			</Stack>
		</Modal>
	);
}
