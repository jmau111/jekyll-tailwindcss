module.exports = {
    content: ["./_site/**/*.html"],
    css: ["./_site/assets/css/main.css"],
    // Tailwind CSS config
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};