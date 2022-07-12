module.exports = {
    block: 'page',
    title: 'Верстка по БЭМ, тренировка',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header'
        },
        {
          block: 'nav'
        },
        {
          block: 'head'
        },
        {
          block: 'content'
        },
        {
            block: 'footer'
        }
    ]
};
