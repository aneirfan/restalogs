class HeroKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Jumbotron -->
    <section id="hero" class="hero-class">
        <div class="teks-tengah">
            <p class="teks-hero">Maem Apps</p>
            <p class="tagline">Cari restoran favorite Anda</p>
        </div>
    </section>
    <!-- Jumbotron -->`;
  }
}

customElements.define('my-hero', HeroKu);
