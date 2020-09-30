import React from 'react';

import Layout from 'components/layout';
import Heading from 'elements/heading';
import Text from 'elements/text';
import Anchor from 'elements/anchor';

const Index = () => {
  return (
    <Layout>
      <Text size="large" weight="bold">
        Headings:
      </Text>
      <Heading as="h1">Heading 1</Heading>
      <br />
      <Heading as="h2">Heading 2</Heading>
      <br />
      <Heading as="h3">Heading 3</Heading>
      <br />
      <Heading as="h4">Heading 4</Heading>
      <br />
      <Heading as="h5">Heading 5</Heading>
      <br />
      <Heading as="h6">Heading 6</Heading>
      <br />
      <br />
      <Text size="large" weight="bold">
        Paragraphs:
      </Text>
      <Text size="large" weight="bold">
        Sizes:
      </Text>
      <Text size="small">Paragraph - small</Text>
      <br />
      <Text size="regular">Paragraph - regular</Text>
      <br />
      <Text size="large">Paragraph - large</Text>
      <br />
      <Text size="large" weight="bold">
        Weights:
      </Text>
      <Text weight="regular">Paragraph - regular</Text>
      <br />
      <Text weight="semiBold">Paragraph - semi bold</Text>
      <br />
      <Text weight="bold">Paragraph - bold</Text>
      <br />
      <br />
      <Text size="large" weight="bold">
        Anchors:
      </Text>
      <Anchor type="primary">Button - primary</Anchor>
      <br />
      <br />
      <Anchor type="secondary">Button - secondary</Anchor>
      <br />
      <br />
      <Anchor type="tertiary">Button - tertiary</Anchor>
      <br />
      <br />
      <Anchor type="quaternary">Button - quaternary</Anchor>
    </Layout>
  );
};

export default Index;
