<script lang="ts">
  import { getContext } from 'svelte';
  import { enhance } from '$app/forms';

  // Retrieve user store from context
  const user = getContext('user');
</script>

<section>
  <form method="post" use:enhance>
    <div class="group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
    </div>

    <div class="group">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" required />
    </div>

    <div class="submit-container">
      <button type="submit">Login</button>
    </div>
  </form>

  <div class="actions">
    <a href="/signup">Sign Up</a>
  </div>
</section>