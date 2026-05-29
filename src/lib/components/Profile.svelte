<script lang="ts">
  import { userState } from '../states/user-state.svelte'
  import { randomInt } from '../utils/random'

  const stats = {
    posts: randomInt(40, 120),
    followers: randomInt(1200, 6000),
    following: randomInt(800, 8000),
  }

  function formatCount(value: number): string {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1).replace('.0', '')}k`
    }
    return String(value)
  }
</script>

{#if userState.loading && !userState.profile}
  <div class="profile profile--loading">Carregando perfil...</div>
{:else if userState.profile}
  {@const user = userState.profile}
  <section class="profile">
    <div class="avatar-ring">
      <img class="avatar" src={user.picture} alt={user.firstName} />
    </div>
    <h2 class="name">{user.firstName}</h2>
    <p class="username">@{user.username}</p>
    <div class="stats">
      <div>
        <strong>{stats.posts}</strong>
        <span>posts</span>
      </div>
      <div>
        <strong>{formatCount(stats.followers)}</strong>
        <span>followers</span>
      </div>
      <div>
        <strong>{formatCount(stats.following)}</strong>
        <span>following</span>
      </div>
    </div>
  </section>
{/if}

<style>
  .profile {
    text-align: center;
    padding: 0 8px 28px;
  }

  .profile--loading {
    color: #8e8e8e;
    font-size: 14px;
  }

  .avatar-ring {
    width: 132px;
    height: 132px;
    margin: 0 auto 16px;
    padding: 4px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    box-sizing: border-box;
  }

  .name {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #262626;
  }

  .username {
    margin: 4px 0 18px;
    color: #8e8e8e;
    font-size: 14px;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .stats strong {
    display: block;
    font-size: 16px;
    color: #262626;
  }

  .stats span {
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #8e8e8e;
  }
</style>
