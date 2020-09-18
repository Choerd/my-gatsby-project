import React from 'react';
import Layout from '../components/layout';

import Button from '../components/button';

const Index = () => {
  return (
    <Layout>
      <div className="container m-auto">
        <p>Hello World!</p>
      </div>

      <Button as="primary">Schaalbare digitale oplossingen</Button>
    </Layout>
  );
};

export default Index;
