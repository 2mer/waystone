import { useLocalStorage } from "@mantine/hooks";
import languages from "./languages";

export default function useLanguage() {
	return useLocalStorage({ key: 'selected_lang', defaultValue: languages[0].initials });
}