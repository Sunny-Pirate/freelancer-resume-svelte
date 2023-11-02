<script>

  const getAllWorkshops = () => {
    fetch('http://localhost:3000/workshops')
      .then(response => response.json())
      .then(data => console.log(data))
  }
</script>


<div class="grid grid-cols-1 grid-rows-[96px_auto] min-h-full h-full px-4">
  <h1 class="self-center justify-self-start">Workshops</h1>
  <ul>
    <li>Primo elemento</li>
  </ul>
</div>