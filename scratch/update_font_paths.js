const fs = require('fs');

let themeCss = fs.readFileSync('assets/css/theme.css', 'utf8');

// 1. Replace ../webfonts/ with ../fonts/
themeCss = themeCss.replace(/\.\.\/webfonts\//g, '../fonts/');

// 2. Replace ../font/ with ../fonts/
themeCss = themeCss.replace(/\.\.\/font\//g, '../fonts/');

// 3. Replace flaticon paths: ./flaticon. with ../fonts/flaticon.
themeCss = themeCss.replace(/\.\/flaticon\./g, '../fonts/flaticon.');

fs.writeFileSync('assets/css/theme.css', themeCss, 'utf8');
console.log('theme.css font paths successfully updated to ../fonts/ !');

