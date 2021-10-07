class FavoriteRestaurantSearchPresenter {
  // constructor() {
  //   this._listenToSearchRequestByUser();
  //   // this._queryElement = document.getElementById('query');
  //   // this._queryElement.addEventListener('change', (event) => {
  //   //   // console.log(event);
  //   //   // this._userQuery = event.target.value;
  //   //   this._latestQuery = event.target.value;
  //   // });
  // }

  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._latestQuery = event.target.value;
      this._favoriteRestaurants.searchRestaurants(this._latestQuery);
      // this._searchRestaurants(event.target.value);
    });
  }

  // _searchRestaurants(latestQuery) {
  //   this._latestQuery = latestQuery;
  //   this._favoriteRestaurants.searchRestaurants(this.latestQuery);
  // }

  // get userQuery() {
  //   return this._userQuery;
  // }
  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
