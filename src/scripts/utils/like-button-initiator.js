// import FavRestorandb from '../data/fav-resto';
import { buatTemplateTombolSuka, buatTemplateTombolGakSuka } from '../views/templates/template-resto';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    console.log(id);
    console.log(this._restaurant);

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await this._favoriteRestaurants.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = buatTemplateTombolSuka();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = buatTemplateTombolGakSuka();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
