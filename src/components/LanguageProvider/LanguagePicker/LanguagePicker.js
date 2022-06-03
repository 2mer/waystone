import { Button, Menu } from "@mantine/core";
import React, { useState } from "react";
import languages from "../languages";
import useLanguage from "../useLanguage";
import FlagIcon from "./FlagIcon";

export default function LanguagePicker() {
	const [language, setLanguage] = useLanguage();
	const foundLanguage = languages.find((l) => l.initials === language);
	const [open, setOpen] = useState(false);

	return (
		<Menu
			open={open}
			control={
				<Button
					leftIcon={<FlagIcon src={foundLanguage.flag} width="30px" />}
					variant="light"
					sx={{ fontFamily: foundLanguage.font }}
					onClick={() => setOpen((prev) => !prev)}
				>
					{language}
				</Button>
			}
		>
			{languages.map((l) => {
				return (
					<Menu.Item
						key={l.initials}
						sx={{ fontFamily: l.font }}
						onClick={() => setLanguage(l.initials)}
						icon={<FlagIcon width="30px" src={l.flag} />}
					>
						{l.name}
					</Menu.Item>
				);
			})}
		</Menu>
	);
}
