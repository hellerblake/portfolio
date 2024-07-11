<script>
	import Nav from "$lib/components/Nav.svelte";
    import "../app.postcss";
  import "../prism.css"
</script>
<div class="min-h-screen flex flex-col justify-between bg-white border-gray-200 dark:bg-gray-900">
  <div>
  <Nav/>   
<slot />
  </div>
  <footer class="flex items-center justify0end space-x-8 border-t border-slate-200 py-6 px-8">footer</footer>
</div>
