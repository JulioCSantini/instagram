<script lang="ts">
  import { userState } from '../states/user-state.svelte'
  import StoriesItem from './StoriesItem.svelte'
</script>

<section class="stories">
  <header class="header">
    <h2>Stories</h2>
    <button type="button" class="watch-all">
      Watch all
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
    </button>
  </header>

  {#if userState.loading && userState.users.length === 0}
    <p class="status">Carregando stories...</p>
  {:else if userState.error}
    <p class="status status--error">{userState.error}</p>
  {:else}
    <div class="list">
      {#each userState.users.slice(1) as user (user.id)}
        <StoriesItem {user} />
      {/each}
    </div>
  {/if}
</section>

<style>
  .stories {
    background: #fff;
    border-radius: 16px;
    padding: 20px 24px;
    margin-bottom: 24px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #262626;
  }

  .watch-all {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: none;
    background: none;
    padding: 0;
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .watch-all svg {
    width: 16px;
    height: 16px;
  }

  .list {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .status {
    margin: 0;
    color: #8e8e8e;
    font-size: 14px;
  }

  .status--error {
    color: #ed4956;
  }
</style>
