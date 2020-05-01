export const regexp = new RegExp(/\\\[([^\]]+?)(?:\\x2d([^\]]+))?\\\]/g);

// \\\[       : matches \[
// ([^\]]+?)  : matches anything except ], but as few characters as possible,
//              so that if inside [] is '-' (\x2d) it stops.
//              It is a 1st capture group, and will be the first part of the
//              range (for [a-z] will be 'a'), or the whole query of match
//              (for [abc] will be 'abc')
// (?:        : open non capture group
// \\x2d      : match '-' (\x2d in unicode)
// ([^\]]+)   : matches anything except ]
//              It is a 2nd capture group, and will be the second part of the
//              range ([a-z]), or the will be undefined for match ([abc])
// )?         : open non capture group, this group is optional
//              and will be present only for a range (for [a-z] will be 'z')
// \\\]       : : matches \]
