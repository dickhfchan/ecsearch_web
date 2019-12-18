module.exports = {
  dest: 'app/static/docs_DuadaE234S9dADJHCS9IADa8dy7HJOjas98FSD',
  base: '/static/docs_DuadaE234S9dADJHCS9IADa8dy7HJOjas98FSD/',
  // ga: 'google analytics ID',
  title: 'Rolltrek',
  description: 'Docs of Rolltrek.',
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      {
        text: 'Github',
        link: 'todo'
      },
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        title: 'Backend',
        children: [
          '/backend/dependencies-notes',
          '/backend/how-to-run',
          '/backend/structure',
          '/backend/db',
          '/backend/utils',
          '/backend/form-validation',
          '/backend/schedule-task',
        ]
      },
      {
        title: 'Frontend',
        children: [
          '/frontend/guide',
          '/frontend/structure',
          '/frontend/one-api',
        ]
      },
    ],
  },
}
