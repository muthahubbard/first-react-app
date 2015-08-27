import alt from '../alt';
import {getFamilyData} from '../api';
import _ from 'lodash';

class FamilyActions {

  /// TODO: remove test / learning
  search(searchText) {
    // make api call to get data
    console.log('alt action search');

    // action needs to dispatch event
    this.dispatch(['Andy', 'Emily', 'William', 'Lizzie']);
  }

  getFamilyDataFromAPI() {
    getFamilyData().then( (data) => {
      this.dispatch(data);
      this.actions.createUniqueTagArray(data);
    });
  }

  createUniqueTagArray (data) {

    var tagData = [];

    data.forEach(function(obj, index, array) {
      tagData = _.union(tagData, obj.tags)
    });

    this.dispatch(tagData);
  }

  getDetails(name) {
    /// do something
    this.dispatch();
  }


}

export default alt.createActions(FamilyActions);

