block('content').content()(function() {
    return[
      {
        block: 'categories',
        content: [
          'Категории',
          {tag: 'br'},
          '+',
          {tag: 'br'},
          'Новости'
        ]
      },
      {
        block: 'page-content',
        content: 'Содержимое страницы'
      }
    ];
});
