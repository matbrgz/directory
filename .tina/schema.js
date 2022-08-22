
import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client'


const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'
const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: '<Your Read Only Token>', // generated on app.tina.io,
    clientId: '<Your Client ID>', // generated on app.tina.io
    branch,
  },
  collections: [
    {
      label: 'Single Software',
      name: 'post',
      path: 'content/posts',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
        },
        {
          type: 'string',
          label: 'Short Description',
          name: 'short-description',
        },
        {
          type: 'rich-text',
          label: 'Description',
          name: 'description',
          isBody: true,
          templates: [
            {
              name: 'PageSection',
              label: 'Page Section',
              fields: [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                  ui: {
                    component: 'textarea',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'string',
          label: 'Supported Languages',
          name: 'supported-languages',
          list: true,
          options: [
            {
              value: 'en',
              label: 'English',
            },
            {
              value: 'es',
              label: 'Spanish',
            }
          ]
        },
        {
          type: 'string',
          label: 'Pricing',
          name: 'pricing',
          list: true,
          options: [
            {
              value: 'prcing-free',
              label: 'Free',
            },
            {
              value: 'free-personal',
              label: 'Free for Personal Use',
            },
            {
              value: 'free-limited',
              label: 'Free with Limited Functionality',
            },
            {
              value: 'commercial',
              label: 'Commercial',
            }
          ]
        },
        {
          type: 'string',
          label: 'Pricing Model',
          name: 'pricing-model',
          list: true,
          options: [
            {
              value: 'model-free',
              label: 'Free',
            },
            {
              value: 'purchase',
              label: 'Purchase',
            },
            {
              value: 'subscription',
              label: 'Subscription',
            },
            {
              value: 'both',
              label: 'both',
            },
          ]
        },
        {
          type: 'boolean',
          label: 'Is Opensource?',
          name: 'opensource',
        },
        {
          type: 'string',
          label: 'License',
          name: 'license',
          list: false,
          options: [
            {
              value: 'none',
              label: 'None',
            },
            {
              value: 'copyright',
              label: 'Copyright',
            },
            {
              value: 'trademark',
              label: 'Trade Mark',
            },
            {
              value: 'AGPL-3.0',
              label: 'GNU Affero General Public License v3.0 (AGPL-3.0)',
            },
            {
              value: 'Apache-2.0',
              label: 'Apache License 2.0 (Apache-2.0)',
            },
            {
              value: 'BSD-2-Clause',
              label: 'BSD 2-Clause "Simplified" License (BSD-2-Clause)',
            },
            {
              value: 'BSD-2-Clause',
              label: 'BSD 3-Clause "New" or "Revised" License (BSD-3-Clause)',
            },
            {
              value: 'BSL-1.0',
              label: 'Boost Software License 1.0 (BSL-1.0)',
            },
            {
              value: 'CC0-1.0',
              label: 'Creative Commons Zero v1.0 Universal (CC0-1.0)',
            },
            {
              value: 'EPL-2.0',
              label: 'Eclipse Public License 2.0 (EPL-2.0)',
            },
            {
              value: 'GPL-2.0',
              label: 'GNU General Public License v2.0 (GPL-2.0)',
            },
            {
              value: 'GPL-3.0',
              label: 'GNU General Public License v3.0 (GPL-3.0)',
            },
            {
              value: 'LGPL-2.1',
              label: 'GNU Lesser General Public License v2.1 (LGPL-2.1)',
            },
            {
              value: 'LGPL-3.0',
              label: 'GNU Lesser General Public License v3.0 (LGPL-3.0)',
            },
            {
              value: 'MIT',
              label: 'MIT License (MIT)',
            },
            {
              value: 'MPL-2.0',
              label: 'Mozilla Public License 2.0 (MPL-2.0)',
            },
            {
              value: 'Unlicense',
              label: 'The Unlicense (Unlicense)',
            },
            {
              value: 'zlib',
              label: 'zlib License (Zlib)',
            },
            {
              value: 'ISC',
              label: 'ISC License (ISC)',
            },
            {
              value: 'other',
              label: 'Other',
            },

          ]
        },
        {
          type: 'string',
          label: 'Source URL',
          name: 'sourceURL',
        },
        {
          type: 'string',
          label: 'Tags',
          name: 'tags',
          list: true
        },
        {
          type: 'string',
          label: 'Categories',
          name: 'categories',
        },
        {
          type: 'string',
          label: 'Platforms',
          name: 'platforms',
        },
        {
          type: 'string',
          label: 'Platform Links',
          name: 'platform-links',
        },
        {
          type: 'string',
          label: 'Platform Notes',
          name: 'platform-notes',
        },
      ],
    },
  ],
})

export default schema

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import('tinacms').then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined
      })
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping)
    })

    return cms
  },
})

