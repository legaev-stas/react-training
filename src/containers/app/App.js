import React from 'react';

import {CategoryPage} from '../../components/category/page';
import {categoryPageConnector} from '../../connector/category-page';

// import {TasksSectionContainer} from '../../containers/task';

const CategoryPageContainer = categoryPageConnector(CategoryPage);

export default () => (
    <div className="App noselect">
        <CategoryPageContainer/>
    </div>
);

