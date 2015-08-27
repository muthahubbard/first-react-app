import alt from '../alt';
import FamilyActions from '../actions/my-actions';

/// store should not be called directly on for state

class FamilyStore {
  
  constructor() {

    /// Instance variables defined anywhere in the store will become the state
    this.test = 'ssdsd';

    this.apiData = [];
    this.orginalApiData = [];
    this.searchString = '';
    this.tagData = [];
    

    // bind event dispatched from action to method in store
    this.bindListeners({
      onSearch: FamilyActions.search,
      loadData: FamilyActions.getFamilyDataFromAPI
    });

  }

  /// action handler
  onSearch(mydata) {
    console.log(mydata);
    console.log('store event fired');
    this.test = 'sjaisaisjaijsijaisjaijsijaisjiajsijaisais';    
  }

  loadData (familyData) {
    this.apiData = familyData;
    this.orginalApiData = familyData;
  }

  
}

export default alt.createStore(FamilyStore, 'FamilyStore');