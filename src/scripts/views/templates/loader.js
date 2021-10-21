const loader = {
  loaderTemplate() {
    return `<div class="loader">
          <span></span>
          <span></span>
          <span></span>
      </div>`;
  },

  OfflineTemplate() {
    return `
          <div class="content">
            <picture>
              <source type="image/webp" srcset="./images/off.png">
              <source type="image/jpeg" srcset="./images/off.png">
              <img src="./images/off.png" alt="no internet">
            </picture>
              <h2>Kamu sedang offline, mohon cek koneksi internet kamu</h2>
          </div>`;
  },
};

export default loader;
