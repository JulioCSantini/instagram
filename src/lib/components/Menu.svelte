<script lang="ts">
  import { randomInt } from '../utils/random'

  type MenuItem = {
    id: string
    label: string
    active?: boolean
    badge?: number
  }

  const items: MenuItem[] = [
    { id: 'feed', label: 'Feed', active: true },
    { id: 'explore', label: 'Explore' },
    { id: 'notifications', label: 'Notifications', badge: randomInt(1, 20) },
    { id: 'messages', label: 'Messages', badge: randomInt(10, 99) },
  ]
</script>

<nav class="menu" aria-label="Navegação principal">
  {#each items as item}
    <button
      type="button"
      class="menu-item"
      class:menu-item--active={item.active}
      aria-current={item.active ? 'page' : undefined}
    >
      <span class="icon" aria-hidden="true">
        {#if item.id === 'feed'}
          <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        {:else if item.id === 'explore'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        {:else if item.id === 'notifications'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v12H5.17L4 17.17V4z"/><path d="m22 6-10 7L2 6"/></svg>
        {/if}
      </span>
      <span class="label">{item.label}</span>
      {#if item.badge}
        <span class="badge">{item.badge}</span>
      {/if}
    </button>
  {/each}
</nav>

<style>
  .menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 8px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 14px;
    background: transparent;
    text-decoration: none;
    color: #262626;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    text-align: left;
  }

  .menu-item--active {
    background: #fff0f3;
    color: #e1306c;
  }

  .icon {
    width: 22px;
    height: 22px;
    display: inline-flex;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  .label {
    flex: 1;
  }

  .badge {
    min-width: 24px;
    padding: 2px 8px;
    border-radius: 999px;
    background: #efefef;
    color: #262626;
    font-size: 12px;
    text-align: center;
  }
</style>
