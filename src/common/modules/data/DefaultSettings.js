/**
 * Specifies the default settings of the add-on.
 *
 * @module data/DefaultSettings
 */

/**
 * An object of all default settings.
 *
 * @private
 * @const
 */
const defaultSettings = {
    popupIconColored: true,
    randomTips: {
        tips: {}
    },
    emojiPicker: {
        set: "native",
        perLine: 9,
        emojiSize: 24
    },
    pickerResult: {
        automaticInsert: true,
        emojiCopy: true,
        emojiCopyOnlyFallback: false,
        resultType: "native",
        showConfirmationMessage: true,
        closePopup: true
    },
    autocorrect: {
        enabled: false,
        autocorrectEmojis: true,
        autocorrectEmojiShortcodes: true,
        autocompleteEmojiShortcodes: true,
        autocompleteSelect: false
    },
    contextMenu: {
        insertEmoji: true
    },
    emojiSearch: {
        enabled: true,
        resultType: "native",
        action: "copy",
        enableFillingResults: false,
        maximumResults: 0
    },
    emojiMart: {}
};

// freeze the inner objects, this is strongly recommend
Object.values(defaultSettings).map(Object.freeze);

/**
 * Export the default settings to be used.
 *
 * @public
 * @const
 */
export const DEFAULT_SETTINGS = Object.freeze(defaultSettings);
