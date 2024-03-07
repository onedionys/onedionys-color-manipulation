// colorManipulation.js

/**
 * Function to manipulate colors.
 * @param {string} color - The color to manipulate (in hex format).
 * @param {number} percentage - The percentage to adjust the color brightness (-100 to 100).
 * @returns {string} The manipulated color (in hex format).
 */
function manipulateColor(color, percentage) {
    color = color.replace("#", "");
    const num = parseInt(color, 16);
    let r = (num >> 16) + percentage;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + percentage;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + percentage;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return "#" + (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0");
}

module.exports = manipulateColor;
