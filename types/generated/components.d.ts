import type { Schema, Attribute } from '@strapi/strapi';

export interface NodeNode extends Schema.Component {
  collectionName: 'components_node_nodes';
  info: {
    displayName: 'Node';
  };
  attributes: {
    list: Attribute.String;
  };
}

export interface PageContentContent extends Schema.Component {
  collectionName: 'components_page_content_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Attribute.RichText;
    content_images: Attribute.Media;
  };
}

export interface ServicesLoen extends Schema.Component {
  collectionName: 'components_salary_loens';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {};
}

export interface ServicesSimpleService extends Schema.Component {
  collectionName: 'components_services_simple_services';
  info: {
    displayName: 'simple_service';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'node.node': NodeNode;
      'page-content.content': PageContentContent;
      'services.loen': ServicesLoen;
      'services.simple-service': ServicesSimpleService;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
