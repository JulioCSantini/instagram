<script lang="ts">
  import type { User } from '../models/user.model'

  let { user }: { user: User } = $props()
</script>

<article class="story-item">
  <div class="avatar-ring">
    <img class="avatar" src={user.picture} alt={user.firstName} />
  </div>
  <p class="name">{user.firstName}</p>
</article>

<style>
  .story-item {
    flex: 0 0 auto;
    width: 88px;
    text-align: center;
  }

  .avatar-ring {
    width: 72px;
    height: 72px;
    margin: 0 auto 8px;
    padding: 3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    box-sizing: border-box;
  }

  .name {
    margin: 0;
    font-size: 12px;
    color: #262626;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
