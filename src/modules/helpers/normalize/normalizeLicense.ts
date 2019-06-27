/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license;
 * For GPL see LICENSE.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

export const normalizeLicense = (
    license: string,
    count: number = 8
): string => {
    const parts: string[] = [];

    while (license.length) {
        parts.push(license.substr(0, count));
        license = license.substr(count);
    }

    parts[1] = parts[1].replace(/./g, '*');
    parts[2] = parts[2].replace(/./g, '*');

    return parts.join('-');
};
