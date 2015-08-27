import alt from '../alt';
import {getFamilyData} from '../api';

class FamilyActions {

  search(searchText) {
    // make api call to get data
    console.log('alt action search');

    // action needs to dispatch event
    this.dispatch(['Andy', 'Emily', 'William', 'Lizzie']);
  }

  getFamilyDataFromAPI() {
    getFamilyData().then( (data) => {
      this.dispatch(data);
    });
  }

  getDetails(name) {
    /// do something
    this.dispatch();
  }


}

export default alt.createActions(FamilyActions);

