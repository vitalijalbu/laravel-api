import en from "./en";
import fr from "./fr";

export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en,
        fr
    }
}));
