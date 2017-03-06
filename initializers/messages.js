import fs from 'fs';

export default function() {
  const localeFiles = fs.readdirSync('locales');
  const messages = { domain: 'en-US', locale_data: {} };

  localeFiles.forEach((localeFile) => {
    const tokens = new RegExp("(.*)\.json").exec(localeFile);
    if (!tokens) return;
    const file = tokens[0];
    const locale = tokens[1];

    const localeData = JSON.parse(fs.readFileSync('locales/' + file, 'utf-8')).locale_data[locale];
    messages.locale_data[locale] = localeData;
  });

  return messages;
}
