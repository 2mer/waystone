import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import React from 'react';
import languages from './languages';

export default function LanguageProvider({ children }) {
	const [selectedLanguage] = useLocalStorage({
		key: 'selected_lang',
		defaultValue: languages[0].initials,
	});

	const foundLanguage = languages.find(
		(l) => l.initials === selectedLanguage
	);

	const font = `${foundLanguage.font}`;

	return (
		<MantineProvider
			theme={{
				fontFamily: font,
				fontFamilyMonospace: font,
				headings: { fontFamily: font },
			}}
		>
			{children}
		</MantineProvider>
	);
}
