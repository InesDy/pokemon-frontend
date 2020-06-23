import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';

const PageLayout =() => {
    return (
        <div>
            <Header>
                <Navigation />
            </Header>

            <Content />
        </div>
    );
};

export default PageLayout;