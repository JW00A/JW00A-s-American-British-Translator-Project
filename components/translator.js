class Translator {
    constructor() {
        this.americanOnly = require('./american-only.js');
        this.americanToBritishSpelling = require('./american-to-british-spelling.js');
        this.americanToBritishTitles = require("./american-to-british-titles.js")
        this.britishOnly = require('./british-only.js')
    }

    translate(text, locale) {
        let translatedText = text;
        let highlightWords = [];

        const mappings = locale === 'american-to-british' ? 
              { ...this.americanOnly, 
                ...this.americanToBritishSpelling, 
                ...this.americanToBritishTitles } :
              { ...this.britishOnly, 
                ...this.flipObject(this.americanToBritishSpelling), 
                ...this.flipObject(this.americanToBritishTitles) };
        
        const timeRegex = locale === 'american-to-british' ? 
                                     /\b(\d{1,2}):(\d{2})\b/g : 
                                     /\b(\d{1,2}).(\d{2})\b/g;

        translatedText = translatedText.replace(timeRegex, (match, p1, p2) => {
            let newTime = locale === 'american-to-british' ? 
                                     `${p1}.${p2}` :
                                     `${p1}:${p2}`;
            
            highlightWords.push(newTime);

            return `<span class="highlight">${newTime}</span>`;
        });

        const reversedTitles = this.flipObject(this.americanToBritishTitles);

        const keyFound = Object.keys(reversedTitles).find((key) => 
            translatedText.toLowerCase().includes(reversedTitles[key])
        );

        if (keyFound !== undefined) {
            const regex = new RegExp(reversedTitles[keyFound], 'i');
            
            translatedText = translatedText.replace(regex,
                `<span class="highlight">${keyFound[0].toUpperCase()}${keyFound.slice(1)}</span>`
            );
        }
        
        Object.entries(mappings).forEach(([key, value]) => {
            let regex = new RegExp(`\\b${key}\\b`, 'gi');

            translatedText = translatedText.replace(regex,
                             `<span class="highlight">${value}</span>`
            );
        });

        return { text, translation: translatedText == text ? 
                                    "Everything looks good to me!" : 
                                    translatedText };
    }

    flipObject(obj) {
        return Object.fromEntries(Object.entries(obj)
                     .map(([key, value]) => [value, key]));
    }
}

module.exports = Translator;