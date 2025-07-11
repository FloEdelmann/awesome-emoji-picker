import * as PageHandler from "./PageHandler.js";

/**
 * As per users settings, insert emoji into web page or copy to clipboard.
 *
 * @private
 * @param {string} text
 * @param {Object} options
 * @param {boolean} options.insertIntoPage whether to try to insert it into the active page
 * @param {boolean} options.copyOnlyOnFallback whether to fallback to copying emojis (also requires copyToClipboard=true)
 * @param {boolean} options.copyToClipboard whether the text should be copied into the page
 * @returns {Promise}
 * @throws {Error}
 */
export async function insertOrCopy(text, options) {
    // destructure config
    const {
        insertIntoPage,
        copyOnlyOnFallback
    } = options;
    let { copyToClipboard } = options;

    console.log("Action triggered for emoji:", text);

    // insert emoji
    let emojiInsertResult = Promise.resolve(); // successful by default
    if (insertIntoPage) {
        emojiInsertResult = PageHandler.insertIntoPage(text).then(console.log);
    }

    // wait for successful execution, if wanted
    if (insertIntoPage && copyOnlyOnFallback) {
        await emojiInsertResult.then(() => {
            // if successful, do not copy emoji
            copyToClipboard = false;
        }).catch((error) => {
            // log error just as a warning, as we expect copying can fail
            console.warn(error);
            // but resolve promise, so await/fallback continues
        });
    }

    // copy to clipboard
    let copyResult = Promise.resolve(); // successful by default
    if (copyToClipboard) {
        copyResult = navigator.clipboard.writeText(text);
    }

    // find out results of operations
    let isCopied = copyToClipboard, isInserted = insertIntoPage;

    // wait for both to succeed or fail (and set status)
    await emojiInsertResult.catch(() => {
        isInserted = false;
    });
    await copyResult.catch(() => {
        isCopied = false;
    });

    return {
        isInserted,
        isCopied
    };
}
