
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import BFFAppHeader from '@/components/app-header';
import BFFFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';



const App = memo(() => {
  return (
    <HashRouter>
      <BFFAppHeader/>
      {renderRoutes(routes)}
      <BFFFooter/>
    </HashRouter>
  )
})

export default App