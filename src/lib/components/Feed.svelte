<script lang="ts">
  import { photoState } from '../states/photo-state.svelte'
  import { userState } from '../states/user-state.svelte'
  import FeedItem from './FeedItem.svelte'

  let activeTab = $state<'latest' | 'popular'>('latest')
</script>

<section class="feed">
  <header class="header">
    <h2>Feed</h2>
    <div class="tabs" role="tablist">
      <button
        type="button"
        role="tab"
        class:active={activeTab === 'latest'}
        aria-selected={activeTab === 'latest'}
        onclick={() => (activeTab = 'latest')}
      >
        Latest
      </button>
      <button
        type="button"
        role="tab"
        class:active={activeTab === 'popular'}
        aria-selected={activeTab === 'popular'}
        onclick={() => (activeTab = 'popular')}
      >
        Popular
      </button>
    </div>
  </header>

  {#if photoState.loading && photoState.photos.length === 0}
    <p class="status">Carregando feed...</p>
  {:else if photoState.error}
    <p class="status status--error">{photoState.error}</p>
  {:else if userState.users.length === 0}
    <p class="status">Aguardando usuários para montar o feed...</p>
  {:else}
    <div class="grid">
      {#each photoState.photos as photo, index (photo.id)}
        <FeedItem
          {photo}
          author={userState.users[(index + 1) % userState.users.length]}
        />
      {/each}
    </div>
  {/if}
</section>

<style>
  .feed {
    background: transparent;
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

  .tabs {
    display: flex;
    gap: 20px;
  }

  .tabs button {
    border: none;
    background: none;
    padding: 0 0 6px;
    font-size: 14px;
    font-weight: 500;
    color: #8e8e8e;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .tabs button.active {
    color: #262626;
    font-weight: 700;
    border-bottom-color: #262626;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
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
