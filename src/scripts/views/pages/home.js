import DataRestaurantSource from '../../data/restodb-source';
import loader from '../templates/loader';
import { buatTemplateItemResto } from '../templates/template-resto';

const Home = {
  async render() {
    return `
      <div class="container">
        <h2 class="resto-header">Daftar Semua Restoran</h2>
        <div id="loading">
        </div>
        <div id="resto" class="resto"></div>
      </div>`;
  },

  async afterRender() {
    const ElementLoader = document.getElementById('loading');
    const bodyContent = document.querySelector('#resto');
    ElementLoader.innerHTML = loader.loaderTemplate();
    bodyContent.innerHTML = '';

    try {
      const restaurants = await DataRestaurantSource.listRestaurants();
      restaurants.forEach((resto) => {
        bodyContent.innerHTML += buatTemplateItemResto(resto);
      });
      ElementLoader.style.display = 'none';
    } catch (err) {
      ElementLoader.innerHTML = loader.OfflineTemplate();
    }
  },
};

export default Home;
