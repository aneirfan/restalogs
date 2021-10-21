import FavRestorandb from '../../data/fav-resto';
import { buatTemplateItemResto } from '../templates/template-resto';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-heading">Restaurant favorit kamu</h2>
        <div id="restaurant" class="restaurant">

        </div>
        </div>
      </div>`;
  },

  async afterRender() {
    const data = await FavRestorandb.getAllResto();
    const listContainer = document.querySelector('#restaurant');

    if (data.length === 0) {
      listContainer.innerHTML = `
        <h3 class="teks-tengah">Kamu belum memiliki daftar restaurant favorit</h3>`;
    } else {
      data.forEach((restaurants) => {
        listContainer.innerHTML += buatTemplateItemResto(restaurants);
      });
    }
  },
};

export default Favorite;
