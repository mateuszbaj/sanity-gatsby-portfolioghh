export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc845efca001a79932c0bc5',
                  name: 'Content Studio',
                  siteId: 'e423aa6a-dc0a-48b2-b0cd-9259f1461689'
                },
                {
                  buildHookId: '5cc845ef74876bc302733522',
                  name: 'Portfolio Website',
                  siteId: '1c79a2ef-8476-41b6-adbf-d6a9d30233fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-portfolioghh',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-portfolioghh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
