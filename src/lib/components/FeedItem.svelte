<script lang="ts">
  import type { Photo } from '../models/photo.model'
  import type { User } from '../models/user.model'
  import { randomInt } from '../utils/random'

  let { photo, author }: { photo: Photo; author: User } = $props()

  let likes = $state(randomInt(10, 400))
  let liked = $state(false)
  let showHeartBurst = $state(false)

  const comments = randomInt(50, 500)

  function toggleLike() {
    if (liked) {
      likes -= 1
      liked = false
      return
    }

    liked = true
    likes += 1
    showHeartBurst = true

    setTimeout(() => {
      showHeartBurst = false
    }, 700)
  }
</script>

<article class="feed-item">
  <div class="image-wrap">
    <img class="image" src={photo.downloadUrl} alt={`Foto de ${photo.author}`} loading="lazy" />
    {#if showHeartBurst}
      <div class="heart-burst" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    {/if}
  </div>
  <footer class="footer">
    <div class="author">
      <img class="avatar" src={author.picture} alt={author.firstName} />
      <span class="name">{author.firstName}</span>
    </div>
    <div class="stats">
      <button
        type="button"
        class="stat stat--like"
        class:stat--liked={liked}
        aria-label={liked ? 'Descurtir' : 'Curtir'}
        aria-pressed={liked}
        onclick={toggleLike}
      >
        {#if liked}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        {/if}
        {likes}
      </button>
      <span class="stat">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        {comments}
      </span>
    </div>
  </footer>
</article>

<style>
  .feed-item {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .image-wrap {
    position: relative;
  }

  .image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .heart-burst {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    animation: heart-pop 0.7s ease forwards;
  }

  .heart-burst svg {
    width: 72px;
    height: 72px;
    color: #fff;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
  }

  @keyframes heart-pop {
    0% {
      opacity: 0;
      transform: scale(0.4);
    }
    20% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    gap: 12px;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    color: #262626;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    color: #8e8e8e;
    font-size: 13px;
  }

  .stat {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .stat--like {
    border: none;
    background: none;
    padding: 0;
    color: inherit;
    font: inherit;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.15s ease;
  }

  .stat--like:active {
    transform: scale(0.92);
  }

  .stat--liked {
    color: #ed4956;
  }

  .stat svg {
    width: 16px;
    height: 16px;
  }
</style>
