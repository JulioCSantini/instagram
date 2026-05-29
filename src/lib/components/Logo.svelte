<h1 class="logo">
  <svg class="logo-icon" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f58529" />
        <stop offset="25%" stop-color="#dd2a7b" />
        <stop offset="50%" stop-color="#8134af" />
        <stop offset="75%" stop-color="#515bd4" />
        <stop offset="100%" stop-color="#feda75" />
      </linearGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      fill="none"
      stroke="url(#instagram-gradient)"
      stroke-width="2"
    />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#instagram-gradient)" stroke-width="2" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="url(#instagram-gradient)" />
  </svg>
  <span class="logo-text">Instagram</span>
</h1>

<style>
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 28px;
    overflow: visible;
    min-height: 48px;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  .logo-text {
    display: inline-block;
    font-family: 'Grand Hotel', 'Segoe Script', cursive;
    font-size: 34px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.01em;
    padding: 4px 4px 6px 0;
    overflow: visible;
    background: linear-gradient(
      90deg,
      #d62976 0%,
      #fa7e1e 45%,
      #feda75 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
</style>
