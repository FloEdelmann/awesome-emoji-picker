/**
 * Checks whether the user is running a mobile version of the browser.
 *
 * @public
 * @module MobileHelper
 */

/**
 * Returns whether the current runtime is a mobile one (true) or not (false).
 *
 * @public
 * @returns {Promise<boolean>} with Boolean
 */
export async function isMobile() {
    const platformInfo = await browser.runtime.getPlatformInfo();

    return platformInfo.os === "android" || platformInfo.os === "ios";
}
