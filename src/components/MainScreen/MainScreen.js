import React, { useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Image,
	Box,
	Stack,
} from '@mantine/core';
import LanguagePicker from '../LanguageProvider/LanguagePicker/LanguagePicker';
import CardPanel from '../CardPanel/CardPanel';
import Splash from '../Splash/Splash';
import GradSpan from '../GradSpan/GradSpan';
import Footer from '../Footer/Footer';
import NavPanel from '../NavPanel/NavPanel';

export default function MainScreen() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			fixed
			navbar={
				<Navbar
					p='md'
					hiddenBreakpoint='sm'
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<NavPanel />
				</Navbar>
			}
			header={
				<Header height={70} p='md'>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: '100%',
							justifyContent: 'space-between',
						}}
					>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<MediaQuery
								largerThan='sm'
								styles={{ display: 'none' }}
							>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size='sm'
									color={theme.colors.gray[6]}
									mr='xl'
								/>
							</MediaQuery>

							{/* title */}
							<Image src='waystone.svg' width='40px' />
							<Text pl='1rem' size='xl'>
								<GradSpan>WAY</GradSpan>STONE
							</Text>
						</Box>

						<LanguagePicker />
					</div>
				</Header>
			}
		>
			<Stack spacing='20vh'>
				<Splash />
				<CardPanel />
				<Footer />
			</Stack>
		</AppShell>
	);
}
