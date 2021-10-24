class HeroKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Jumbotron -->
    <section id="hero" class="hero-class" style="background:linear-gradient(rgba(27, 66, 106, 0.35),rgba(8, 24, 40, 0.75)),url(/images/heros/hero-image_4.jpg), no-repeat; background-position: top; background-size: cover;" >
        <div class="teks-tengah">
            <img alt="logo" src="/images/heros/logotrans.png" style="width: 200px;" class="img-logo">
            <p class="teks-hero">Maem Apps</p>
            <p>Cari restoran favorite Anda</p>
        </div>
    </section>
    <!-- Jumbotron -->`;
  }
}

customElements.define('my-hero', HeroKu);
