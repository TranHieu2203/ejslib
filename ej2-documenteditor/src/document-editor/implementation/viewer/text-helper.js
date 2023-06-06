import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { WCharacterFormat } from '../index';
import { HelperMethods } from '../editor/editor-helper';
import { CharacterRangeType } from '../../index';
/**
 * @private
 */
var TextHelper = /** @class */ (function () {
    function TextHelper(documentHelper) {
        this.paragraphMarkInfo = {};
        this.documentHelper = documentHelper;
        if (!isNullOrUndefined(documentHelper)) {
            this.context = documentHelper.containerContext;
        }
    }
    Object.defineProperty(TextHelper.prototype, "paragraphMark", {
        get: function () {
            return '¶';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextHelper.prototype, "lineBreakMark", {
        get: function () {
            return '↲';
        },
        enumerable: true,
        configurable: true
    });
    TextHelper.prototype.getEnSpaceCharacter = function () {
        return String.fromCharCode(8194);
    };
    TextHelper.prototype.repeatChar = function (char, count) {
        var text = '';
        for (var i = 0; i < count; i++) {
            text += char;
        }
        return text;
    };
    TextHelper.prototype.getParagraphMarkWidth = function (characterFormat) {
        return this.getParagraphMarkSize(characterFormat).Width;
    };
    TextHelper.prototype.getParagraphMarkSize = function (characterFormat) {
        var format = this.getFormatText(characterFormat);
        if (this.paragraphMarkInfo[format]) {
            return this.paragraphMarkInfo[format];
        }
        // Gets the text element's width;
        var width = this.getWidth(this.paragraphMark, characterFormat);
        // Calculate the text element's height and baseline offset.
        var textHelper = this.getHeight(characterFormat);
        var textSizeInfo = {
            'Width': width, 'Height': textHelper.Height, 'BaselineOffset': textHelper.BaselineOffset
        };
        return this.paragraphMarkInfo[format] = textSizeInfo;
    };
    TextHelper.prototype.getTextSize = function (elementBox, characterFormat) {
        // Gets the text element's width;
        var textTrimEndWidth = 0;
        var isRTL = characterFormat.bidi || this.isRTLText(elementBox.text);
        var text = this.setText(elementBox.text, isRTL, characterFormat.bdo);
        textTrimEndWidth = this.getWidth(text, characterFormat);
        elementBox.width = textTrimEndWidth;
        // Calculate the text element's height and baseline offset.
        var textHelper = this.getHeight(characterFormat);
        elementBox.height = textHelper.Height;
        elementBox.baselineOffset = textHelper.BaselineOffset;
        if (elementBox.text[elementBox.text.length - 1] === ' ') {
            textTrimEndWidth = this.getWidth(HelperMethods.trimEnd(elementBox.text), characterFormat);
        }
        elementBox.trimEndWidth = textTrimEndWidth;
        return textTrimEndWidth;
    };
    TextHelper.prototype.getHeight = function (characterFormat) {
        // Get character format property as  below predefined structure to make it easy to check and retrieve
        // Predefined static structure `[FontName];[FontSize];bold;italic` to maintain as key in the collection
        var key = this.getFormatText(characterFormat);
        if (!isNullOrUndefined(this.documentHelper.heightInfoCollection[key])) {
            return this.documentHelper.heightInfoCollection[key];
        }
        var sizeInfo = this.documentHelper.owner.textMeasureHelper.getHeightInternal(characterFormat);
        this.documentHelper.heightInfoCollection[key] = sizeInfo;
        return sizeInfo;
    };
    TextHelper.prototype.getFormatText = function (characterFormat) {
        var formatText = characterFormat.fontFamily.toLocaleLowerCase();
        formatText += ';' + characterFormat.fontSize;
        if (characterFormat.bold) {
            formatText += ';' + 'bold';
        }
        if (characterFormat.italic) {
            formatText += ';' + 'italic';
        }
        return formatText;
    };
    TextHelper.prototype.measureTextExcludingSpaceAtEnd = function (text, characterFormat) {
        return this.getWidth(HelperMethods.trimEnd(text), characterFormat);
    };
    TextHelper.prototype.getWidth = function (text, characterFormat) {
        if (text.match('\v')) {
            text.replace('\v', this.lineBreakMark);
        }
        var bold = '';
        var italic = '';
        var fontFamily = '';
        var fontSize = characterFormat.fontSize;
        bold = characterFormat.bold ? 'bold' : '';
        italic = characterFormat.italic ? 'italic' : '';
        fontFamily = characterFormat.fontFamily;
        fontSize = fontSize === 0 ? 0.5 : fontSize / (characterFormat.baselineAlignment === 'Normal' ? 1 : 1.5);
        this.context.font = bold + ' ' + italic + ' ' + fontSize + 'pt' + ' ' + fontFamily;
        if (characterFormat.allCaps) {
            text = text.toUpperCase();
        }
        return this.context.measureText(text).width;
    };
    TextHelper.prototype.setText = function (textToRender, isBidi, bdo, isRender) {
        if (isNullOrUndefined(isRender)) {
            isRender = false;
        }
        if (textToRender.length === 0) {
            return '';
        }
        var isRtlText = isBidi;
        if ((!isRtlText && (bdo === 'RTL')) || (isRtlText && (bdo === 'LTR'))) {
            textToRender = HelperMethods.reverseString(textToRender);
        }
        else if (isRender && isRtlText && HelperMethods.endsWith(textToRender)) {
            var spaceCount = textToRender.length - HelperMethods.trimEnd(textToRender).length;
            textToRender = HelperMethods.addSpace(spaceCount) + HelperMethods.trimEnd(textToRender);
        }
        return textToRender;
    };
    TextHelper.prototype.measureText = function (text, characterFormat) {
        // Gets the text element's width;
        var width = this.getWidth(text, characterFormat);
        // Calculate the text element's height and baseline offset.
        var textHelper = this.getHeight(characterFormat);
        return {
            'Width': width, 'Height': textHelper.Height, 'BaselineOffset': textHelper.BaselineOffset
        };
    };
    TextHelper.prototype.updateTextSize = function (elementBox, paragraph) {
        var format = new WCharacterFormat(undefined);
        var listCharacterFormat = elementBox.listLevel.characterFormat;
        var breakCharacterFormat = paragraph.characterFormat;
        format.fontSize = listCharacterFormat.hasValue('fontSize') ? listCharacterFormat.fontSize : breakCharacterFormat.fontSize;
        format.fontFamily = listCharacterFormat.hasValue('fontFamily') ? listCharacterFormat.fontFamily : breakCharacterFormat.fontFamily;
        var bold = '';
        var italic = '';
        var baselineAlignment = listCharacterFormat.baselineAlignment === 'Normal' ?
            breakCharacterFormat.baselineAlignment : listCharacterFormat.baselineAlignment;
        bold = listCharacterFormat.hasValue('bold') ? listCharacterFormat.bold ? 'bold' : '' : breakCharacterFormat.bold ? 'bold' : '';
        italic = listCharacterFormat.hasValue('italic') ? listCharacterFormat.italic ? 'italic' : ''
            : breakCharacterFormat.italic ? 'italic' : '';
        format.baselineAlignment = baselineAlignment;
        if (bold) {
            format.bold = true;
        }
        if (italic) {
            format.italic = true;
        }
        var isRTL = format.bidi || this.isRTLText(elementBox.text);
        var text = this.setText(elementBox.text, isRTL, format.bdo);
        elementBox.width = this.getWidth(text, format);
        // Calculate the text element's height and baseline offset.
        var textHelper = this.getHeight(format);
        elementBox.height = textHelper.Height;
        elementBox.baselineOffset = textHelper.BaselineOffset;
    };
    TextHelper.prototype.containsSpecialCharAlone = function (text) {
        /* eslint-disable */
        var specialChars = '*|.\:[]{}-`\;()@&$#%!~?,' + ' ' + "'";
        for (var i = 0; i < text.length; i++) {
            if (specialChars.indexOf(text.charAt(i)) === -1) {
                return false;
            }
        }
        return true;
    };
    TextHelper.prototype.containsNumberAlone = function (text) {
        /* eslint-disable */
        var number = '0123456789';
        if (text === '') {
            return false;
        }
        for (var i = 0; i < text.length; i++) {
            if (number.indexOf(text.charAt(i)) === -1) {
                return false;
            }
        }
        return true;
    };
    TextHelper.prototype.containsCombinationText = function (element) {
        /* eslint-disable */
        if (element.text.match(/^[0-9]+$/) && element.paragraph.bidi) {
            return true;
        }
        else {
            return false;
        }
    };
    TextHelper.prototype.inverseCharacter = function (ch) {
        switch (ch) {
            //Specify the '('
            case '(':
                //Specify the ')'
                return ')';
            //Specify the ')'
            case ')':
                //Specify the '('
                return '(';
            //Specify the '<'
            case '<':
                //Specify the '>'
                return '>';
            //Specify the '>'
            case '>':
                //Specify the '<'
                return '<';
            //Specify the '{'
            case '{':
                //Specify the '}'
                return '}';
            //Specify the '}'
            case '}':
                //Specify the '{'
                return '{';
            //Specify the '['
            case '[':
                //Specify the ']'
                return ']';
            //Specify the ']'
            case ']':
                //Specify the '['
                return '[';
            default:
                return ch;
        }
    };
    TextHelper.prototype.containsSpecialChar = function (text) {
        var specialChars = '*|.\:[]{}-`\;()@&$#%!~?' + ' ';
        for (var i = 0; i < text.length; i++) {
            if (specialChars.indexOf(text.charAt(i)) !== -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     * @param {string} text - Specifies the text
     * @returns {boolean} - Returns true if given text it right to left.
     */
    TextHelper.prototype.isRTLText = function (text) {
        var isRTL = false;
        if (!isNullOrUndefined(text)) {
            for (var i = 0; i < text.length; i++) {
                var temp = text[i];
                if ((temp >= String.fromCharCode(1424) && temp <= String.fromCharCode(1535)) ////Script-Hebr, Hebrew characters https://en.wikipedia.org/wiki/Hebrew_alphabet#Unicode_and_HTML (https://en.wikipedia.org/wiki/Hebrew_(Unicode_block))
                    || (temp >= String.fromCharCode(64285) && temp <= String.fromCharCode(64335)) //Script-Hebr, Hebrew Alphabetic Presentation Forms characters https://en.wikipedia.org/wiki/Alphabetic_Presentation_Forms 
                    || (temp >= String.fromCharCode(1536) && temp <= String.fromCharCode(1791)) //Arabic - Urdu characters
                    || (temp >= String.fromCharCode(1872) && temp <= String.fromCharCode(1919)) //Arabic - Urdu characters
                    || (temp >= String.fromCharCode(2208) && temp <= String.fromCharCode(2303)) //Arabic characters
                    || (temp >= String.fromCharCode(64336) && temp <= String.fromCharCode(65023)) //Arabic - Urdu characters
                    || (temp >= String.fromCharCode(65136) && temp <= String.fromCharCode(65279)) //Arabic - Urdu characters
                    || (temp >= String.fromCharCode(43392) && temp <= String.fromCharCode(43487)) //Javanese characters
                    || (temp >= String.fromCharCode(1792) && temp <= String.fromCharCode(1871)) //Syriac characters
                    || (temp >= String.fromCharCode(1920) && temp <= String.fromCharCode(1983)) //Thaana characters
                    || (temp >= String.fromCharCode(2112) && temp <= String.fromCharCode(2143)) //Mandiac characters
                    || (temp >= String.fromCharCode(1984) && temp <= String.fromCharCode(2047)) //N'Ko characters
                    || (temp >= String.fromCharCode(2048) && temp <= String.fromCharCode(2111)) //Samaritan characters
                    //Tifinag characters 
                    || (temp >= String.fromCharCode(11568) && temp <= String.fromCharCode(11647))) {
                    isRTL = true;
                    break;
                }
            }
        }
        return isRTL;
    };
    /**
     * @private
     * @param {string} text - Specifies the text
     * @returns {RtlInfo} - Returns the text info.
     */
    TextHelper.prototype.getRtlLanguage = function (text) {
        if (isNullOrUndefined(text) || text === '') {
            return { isRtl: false, id: 0 };
        }
        if (text >= String.fromCharCode(1424) && text <= String.fromCharCode(1535)) {
            return { isRtl: true, id: 1 };
            //Arabic - Urdu characters
        }
        else if ((text >= String.fromCharCode(1536) && text <= String.fromCharCode(1791))
            || (text >= String.fromCharCode(1872) && text <= String.fromCharCode(1919))
            || (text >= String.fromCharCode(2208) && text <= String.fromCharCode(2303))
            || (text >= String.fromCharCode(64336) && text <= String.fromCharCode(65023))
            || (text >= String.fromCharCode(65136) && text <= String.fromCharCode(65279))) {
            return { isRtl: true, id: 2 };
        }
        else if (text >= String.fromCharCode(43392) && text <= String.fromCharCode(43487)) {
            return { isRtl: true, id: 3 };
        }
        else if (text >= String.fromCharCode(1792) && text <= String.fromCharCode(1871)) {
            return { isRtl: true, id: 4 };
        }
        else if (text >= String.fromCharCode(1920) && text <= String.fromCharCode(1983)) {
            return { isRtl: true, id: 5 };
        }
        else if (text >= String.fromCharCode(2112) && text <= String.fromCharCode(2143)) {
            return { isRtl: true, id: 6 };
        }
        else if (text >= String.fromCharCode(1984) && text <= String.fromCharCode(2047)) {
            return { isRtl: true, id: 7 };
        }
        else if (text >= String.fromCharCode(2048) && text <= String.fromCharCode(2111)) {
            return { isRtl: true, id: 8 };
        }
        else if (text >= String.fromCharCode(11568) && text <= String.fromCharCode(11647)) {
            return { isRtl: true, id: 9 };
        }
        return { isRtl: false, id: 0 };
    };
    /**
     * @private
     */
    TextHelper.prototype.splitTextByConsecutiveLtrAndRtl = function (text, isTextBidi, isRTLLang, characterRangeTypes, isPrevLTRText, hasRTLCharacter) {
        var charTypeIndex = characterRangeTypes.length;
        var splittedText = [];
        if (isNullOrUndefined(text) || text === '') {
            return splittedText;
        }
        var lastLtrIndex = -1;
        var ltrText = '';
        var rtlText = '';
        var wordSplitChars = '';
        var numberText = '';
        for (var i = 0; i < text.length; i++) {
            var currentCharacterType = 0;
            var separateEachWordSplitChars = false;
            if ((isNullOrUndefined(isPrevLTRText) ? !isPrevLTRText : isTextBidi) && this.isNumber(text[i])) {
                numberText += text[i];
                currentCharacterType = 4;
            }
            else if (this.isWordSplitChar(text[i])) {
                currentCharacterType = 2;
                if (separateEachWordSplitChars = (isTextBidi || (text.charCodeAt(i) == 32 && wordSplitChars == ''))) {
                    wordSplitChars += text[i];
                }
                else {
                    wordSplitChars += text[i];
                }
            }
            else if (this.isRTLText(text[i]) && !this.isNumber(text[i])) {
                isPrevLTRText = false;
                hasRTLCharacter = true;
                rtlText += text[i];
                currentCharacterType = 1;
            }
            else {
                isPrevLTRText = true;
                ltrText += text[i];
            }
            if (numberText != '' && currentCharacterType != 4) {
                splittedText.push(numberText);
                characterRangeTypes.push(CharacterRangeType.Number);
                numberText = '';
            }
            if (rtlText != '' && currentCharacterType != 1) {
                splittedText.push(rtlText);
                characterRangeTypes.push(CharacterRangeType.RightToLeft);
                rtlText = '';
            }
            if (ltrText != '' && currentCharacterType != 0) {
                splittedText.push(ltrText);
                lastLtrIndex = splittedText.length - 1;
                characterRangeTypes.push(CharacterRangeType.LeftToRight);
                ltrText = '';
            }
            if (wordSplitChars != '' && (currentCharacterType != 2 || separateEachWordSplitChars)) {
                splittedText.push(wordSplitChars);
                characterRangeTypes.push(CharacterRangeType.WordSplit);
                wordSplitChars = '';
            }
        }
        if (numberText != '') {
            splittedText.push(numberText);
            characterRangeTypes.push(CharacterRangeType.Number);
        }
        else if (rtlText != '') {
            splittedText.push(rtlText);
            characterRangeTypes.push(CharacterRangeType.RightToLeft);
        }
        else if (ltrText != '') {
            splittedText.push(ltrText);
            lastLtrIndex = splittedText.length - 1;
            characterRangeTypes.push(CharacterRangeType.LeftToRight);
        }
        else if (wordSplitChars != '') {
            splittedText.push(wordSplitChars);
            characterRangeTypes.push(CharacterRangeType.WordSplit);
        }
        if (hasRTLCharacter || (!isNullOrUndefined(isPrevLTRText) && !isPrevLTRText)) {
            for (var i = 1; i < splittedText.length; i++) {
                //Combines the consecutive LTR, RTL, and Number (Number get combined only if it's splitted by non reversing characters (.,:)) 
                //along with single in-between word split character.
                var charType = characterRangeTypes[i + charTypeIndex];
                if (charType == CharacterRangeType.WordSplit && splittedText[i].length == 1
                    && i + charTypeIndex + 1 < characterRangeTypes.length
                    && characterRangeTypes[i + charTypeIndex - 1] != CharacterRangeType.WordSplit
                    && (characterRangeTypes[i + charTypeIndex - 1] != CharacterRangeType.Number
                        //Else handled to combine consecutive number when text bidi is false and middle word split character is not white space.
                        || this.isNumberNonReversingCharacter(splittedText[i], isTextBidi))
                    && characterRangeTypes[i + charTypeIndex - 1] == characterRangeTypes[i + charTypeIndex + 1]) {
                    splittedText[i - 1] = splittedText[i - 1] + splittedText[i] + splittedText[i + 1];
                    splittedText.splice(i, 1);
                    splittedText.splice(i, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    i--;
                }
            }
        }
        else if (lastLtrIndex != -1) {
            if (isTextBidi) {
                for (var i = 1; i < lastLtrIndex; i++) {
                    //Combines the first and last LTR along with all in-between splited text's.
                    var charType = characterRangeTypes[i + charTypeIndex];
                    if (charType == CharacterRangeType.WordSplit && i < lastLtrIndex
                        && characterRangeTypes[i + charTypeIndex - 1] == CharacterRangeType.LeftToRight) {
                        ltrText = '';
                        for (var j = i + 1; j <= lastLtrIndex; j++) {
                            ltrText += splittedText[j];
                            splittedText.splice(j, 1);
                            characterRangeTypes.splice(j + charTypeIndex, 1);
                            j--;
                            lastLtrIndex--;
                        }
                        splittedText[i - 1] = splittedText[i - 1] + splittedText[i] + ltrText;
                        splittedText.splice(i, 1);
                        characterRangeTypes.splice(i + charTypeIndex, 1);
                        i--;
                        lastLtrIndex--;
                    }
                }
            }
            else {
                //Return the input text if text bidi is false.
                splittedText.length = 0;
                splittedText.push(text);
            }
        }
        else if (!isTextBidi) {
            //Return the input text if text bidi is false.
            splittedText.length = 0;
            splittedText.push(text);
        }
        if (isTextBidi) {
            for (var i = 1; i < splittedText.length; i++) {
                //Combines the consecutive LTR, RTL, and Number (Number get combined only if it's splitted by non reversing characters (.,:)
                //or if it's lang attribute is represent a RTL language)
                //along with single in-between number non reversing word split character.
                var charType = characterRangeTypes[i + charTypeIndex];
                if (charType == CharacterRangeType.WordSplit && splittedText[i].length == 1
                    && i + charTypeIndex + 1 < characterRangeTypes.length
                    && characterRangeTypes[i + charTypeIndex - 1] != CharacterRangeType.WordSplit
                    && (characterRangeTypes[i + charTypeIndex - 1] != CharacterRangeType.Number
                        || this.isNumberNonReversingCharacter(splittedText[i], isTextBidi) || !isRTLLang)
                    && characterRangeTypes[i + charTypeIndex - 1] == characterRangeTypes[i + charTypeIndex + 1]) {
                    splittedText[i - 1] = splittedText[i - 1] + splittedText[i] + splittedText[i + 1];
                    splittedText.splice(i, 1);
                    splittedText.splice(i, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    i--;
                }
                //Combines the Number along with single non-word split characters (% $ #).
                else if (charType == CharacterRangeType.WordSplit
                    && characterRangeTypes[i + charTypeIndex - 1] == CharacterRangeType.Number
                    && this.isNonWordSplitCharacter(splittedText[i]) && !isRTLLang) {
                    splittedText[i - 1] = splittedText[i - 1] + splittedText[i];
                    splittedText.splice(i, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    i--;
                }
                //Combines the consecutive LTR and Number
                else if (charType == CharacterRangeType.LeftToRight
                    && (characterRangeTypes[i + charTypeIndex - 1] == CharacterRangeType.Number
                        || characterRangeTypes[i + charTypeIndex - 1] == CharacterRangeType.LeftToRight)) {
                    splittedText[i - 1] = splittedText[i - 1] + splittedText[i];
                    characterRangeTypes[i + charTypeIndex - 1] = CharacterRangeType.LeftToRight;
                    splittedText.splice(i, 1);
                    characterRangeTypes.splice(i + charTypeIndex, 1);
                    i--;
                }
            }
        }
        return splittedText;
    };
    /**
     * @private
     */
    TextHelper.prototype.isRightToLeftLanguage = function (lang) {
        return (lang == 14337 || lang == 15361 || lang == 5121 || lang == 3073 || lang == 2049 ||
            lang == 11265 || lang == 13313 || lang == 12289 || lang == 4097 || lang == 8193 ||
            lang == 16385 || lang == 1025 || lang == 10241 || lang == 7169 || lang == 9217 || lang == 10655);
    };
    TextHelper.prototype.isNumber = function (ch) {
        if (!isNaN(parseInt(ch, 10))) {
            //This logic works for universal digits 0 to 9.
            return true;
        }
        else if (ch >= String.fromCharCode(1632) && ch <= String.fromCharCode(1641)) {
            //This logic works for ARABIC-INDIC DIGIT
            return true;
        }
        else if (ch >= String.fromCharCode(1776) && ch <= String.fromCharCode(1785)) {
            //This logic works for EXTENDED ARABIC-INDIC DIGIT
            return true;
        }
        else {
            //TODO: Extend this for language specific 
            return false;
        }
    };
    /**
     * @private
     */
    TextHelper.prototype.isWordSplitChar = function (character) {
        for (var i = 0; i < TextHelper.wordSplitCharacters.length; i++) {
            if (TextHelper.wordSplitCharacters[i] === character) {
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     */
    TextHelper.prototype.isNumberNonReversingCharacter = function (character, isTextBidi) {
        for (var i = 0; i < TextHelper.numberNonReversingCharacters.length; i++) {
            var ch = TextHelper.numberNonReversingCharacters[i];
            if (character[0] == ch && (ch.charCodeAt(0) == 47 ? !isTextBidi : true)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     */
    TextHelper.prototype.isNonWordSplitCharacter = function (character) {
        var isNonWordSplitChar = false;
        for (var i = 0; i < character.length; i++) {
            var charCode = character.charCodeAt(i);
            //Consider a (% $ #) as non-word split characters
            if (charCode == 35 || charCode == 36 || charCode == 37) {
                isNonWordSplitChar = true;
            }
            else {
                isNonWordSplitChar = false;
                break;
            }
        }
        return isNonWordSplitChar;
    };
    TextHelper.prototype.destroy = function () {
        this.documentHelper = undefined;
        this.context = undefined;
        this.paragraphMarkInfo = {};
        this.paragraphMarkInfo = undefined;
    };
    TextHelper.wordSplitCharacters = [String.fromCharCode(32), String.fromCharCode(33), String.fromCharCode(34), String.fromCharCode(35), String.fromCharCode(36), String.fromCharCode(37), String.fromCharCode(38), String.fromCharCode(39), String.fromCharCode(40), String.fromCharCode(41), String.fromCharCode(42), String.fromCharCode(43), String.fromCharCode(44), String.fromCharCode(45), String.fromCharCode(46), String.fromCharCode(47), String.fromCharCode(58), String.fromCharCode(59), String.fromCharCode(60), String.fromCharCode(61), String.fromCharCode(62), String.fromCharCode(63), String.fromCharCode(64), String.fromCharCode(91), String.fromCharCode(92), String.fromCharCode(93), String.fromCharCode(94), String.fromCharCode(95), String.fromCharCode(96), String.fromCharCode(123), String.fromCharCode(124), String.fromCharCode(125), String.fromCharCode(126), String.fromCharCode(1548), String.fromCharCode(1563), String.fromCharCode(1567), String.fromCharCode(8216), String.fromCharCode(8217), String.fromCharCode(8221), String.fromCharCode(12288), String.fromCharCode(8207)];
    TextHelper.numberNonReversingCharacters = [String.fromCharCode(44), String.fromCharCode(46), String.fromCharCode(47), String.fromCharCode(58), String.fromCharCode(1548)];
    return TextHelper;
}());
export { TextHelper };
