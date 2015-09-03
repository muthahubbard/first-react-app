import React from 'react'
import AltContainer from 'alt/AltContainer'
import MyAltContainerComponent from './altContainerComponent'
import FamilyStore from './stores/my-store';
import FamilyActions from './actions/my-actions';

export default class MyAltContainer extends React.Component {

  render() {
    return <AltContainer store={FamilyStore} actions={ { MyActions: FamilyActions } }>
      <MyAltContainerComponent />
      </AltContainer>
  }

}

