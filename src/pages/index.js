import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  React.useEffect(() => {
    history.push('/category/intro');
  }, [history]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    />
  );
}
