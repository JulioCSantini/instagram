<script lang="ts">
  import { onMount } from 'svelte'
  import Feed from './lib/components/Feed.svelte'
  import Logo from './lib/components/Logo.svelte'
  import Menu from './lib/components/Menu.svelte'
  import Profile from './lib/components/Profile.svelte'
  import Stories from './lib/components/Stories.svelte'
  import { loadPhotos } from './lib/states/photo-state.svelte'
  import { loadUsers } from './lib/states/user-state.svelte'

  onMount(async () => {
    await loadUsers(12)
    await loadPhotos(1, 8)
  })
</script>

<div class="layout">
  <aside class="sidebar">
    <Logo />
    <Profile />
    <Menu />
  </aside>

  <main class="main">
    <Stories />
    <Feed />
  </main>
</div>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
    background: #fafafa;
  }

  .sidebar {
    width: 320px;
    flex-shrink: 0;
    background: #fff;
    border-right: 1px solid #efefef;
    padding: 28px 20px;
    box-sizing: border-box;
    overflow: visible;
  }

  .main {
    flex: 1;
    padding: 28px 32px;
    overflow: auto;
    box-sizing: border-box;
  }
</style>
