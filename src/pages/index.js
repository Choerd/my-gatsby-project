import React from 'react';

import Layout from 'components/layout';
import Anchor from 'elements/anchor';

const Index = () => {
  return (
    <Layout>
      <Anchor to="/blog/" type="primary">
        Button
      </Anchor>
      <br />
      <br />
      <br />
      <Anchor to="/blog/" type="secondary">
        Button
      </Anchor>
    </Layout>
  );
};

export default Index;
