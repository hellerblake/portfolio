<script>
  import { page } from "$app/stores"
</script>
<div class="text-center w-full mt-24 text-5xl dark:text-white"> {$page.status} | <span class="text-3xl align-middle">{$page.error?.message}</span>  </div>
