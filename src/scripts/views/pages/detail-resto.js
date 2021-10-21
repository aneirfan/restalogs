import UrlParser from '../../routes/url-parser';
import DataRestaurantSource from '../../data/restodb-source';
import { buatTemplateDetailResto } from '../templates/template-resto';
import loader from '../templates/loader';
import FavRestorandb from '../../data/fav-resto';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="loading"></div>
      <div id="rest" class="rest"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#rest');
    const ElementLoader = document.getElementById('loading');
    ElementLoader.innerHTML = loader.loaderTemplate();

    try {
      const restaurant = await DataRestaurantSource.detailRestaurants(url.id);
      restoContainer.innerHTML += buatTemplateDetailResto(restaurant);
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavRestorandb,
        restaurant,
      });

      ElementLoader.style.display = 'none';
    } catch (error) {
      ElementLoader.innerHTML = loader.OfflineTemplate();
    }
  },
};
export default Detail;
