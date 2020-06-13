
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/docs/',
  component: ComponentCreator('/docs/'),
  exact: true,
  
},
{
  path: '/docs/blog',
  component: ComponentCreator('/docs/blog'),
  exact: true,
  
},
{
  path: '/docs/blog/hello-world',
  component: ComponentCreator('/docs/blog/hello-world'),
  exact: true,
  
},
{
  path: '/docs/blog/hola',
  component: ComponentCreator('/docs/blog/hola'),
  exact: true,
  
},
{
  path: '/docs/blog/tags',
  component: ComponentCreator('/docs/blog/tags'),
  exact: true,
  
},
{
  path: '/docs/blog/tags/docusaurus',
  component: ComponentCreator('/docs/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/docs/blog/tags/hello',
  component: ComponentCreator('/docs/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/docs/blog/tags/hola',
  component: ComponentCreator('/docs/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/docs/blog/tags/misaki',
  component: ComponentCreator('/docs/blog/tags/misaki'),
  exact: true,
  
},
{
  path: '/docs/blog/welcome',
  component: ComponentCreator('/docs/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs/docs',
  component: ComponentCreator('/docs/docs'),
  exact: true,
  
},
{
  path: '/docs/docs/:route',
  component: ComponentCreator('/docs/docs/:route'),
  
  routes: [
{
  path: '/docs/docs/doc1',
  component: ComponentCreator('/docs/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/docs/doc2',
  component: ComponentCreator('/docs/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/docs/doc3',
  component: ComponentCreator('/docs/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/docs/mdx',
  component: ComponentCreator('/docs/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
