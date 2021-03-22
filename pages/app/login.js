import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginPage() {
  return (
    <div>
      LoginPage
    </div>
  );
}

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});