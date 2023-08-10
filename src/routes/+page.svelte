<script lang="ts">
  let companyName = "DreamLab.Solutions"
  let sitePurposes = [
    { label: "UX Designer", textEffect: "linear-gradient(90deg, purple, blue)" },
    { label: "UI Developer", textEffect: "linear-gradient(90deg, blue, green)" },
    { label: "Frontend Engineer", textEffect: "linear-gradient90deg, green, yellow" }

  ]
</script>


<h1>{companyName}</h1>
<ul>
  {#each sitePurposes as item}
    <li>{item.label}</li>
  {/each}
</ul>
<p>👋 Hello! I'm Luca, a passionate Italian who's been chasing the digital frontier since the age of 9. Back in 1994, with wide-eyed wonder,
  I delved into the world of ones and zeros through a 286 PC, and boy, was it love at first sight!

  School? Ah, the days when I fortified my foundations in math and physics, unknowingly setting the stage for the tech whizz in me. Beyond
  the textbooks, life had its own curriculum. Be it flipping pizzas, tending to gardens, or selling construction materials, every hat I wore
  taught me patterns - patterns that now shape the digital solutions I craft for diverse industries.

  For 14 vivid years, I waved the green and blue flags of my beloved Saletto, living the art of 'sbandieratore'. These very colors now
  breathe life into my logo, a nod to my roots.

  Racing? Oh, the adrenaline! I've been burning virtual rubber since 2006. Still revving it up with my original online team, our proudest
  moment? Conquering the 24-hour online race at Nurburgring.

  From the lanes of Saletto to the digital lanes of the Netherlands, my journey's been nothing short of an adventure. Here's to life,
  passions, and the quirks in between. Buckle up, and let's ride this journey together! 🚀
  <span class="ndr">Content created with the help of ChatGTP</span>
</p>


<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
        font-size: 2.56rem;
        background: linear-gradient(90deg, #27ae60, #408bd1);
        background-clip: text;
        fill: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-direction: row;
        place-items: center;
    }

    ul li {
        padding: .44rem 1rem;
    }

    span.ndr::before {
        content: "NDR: ";
        font-weight: bold;
    }

    span.ndr {
        margin-top: 2rem;
        font-size: .88rem;
        display: block;
        text-align: right;
    }

    span.ndr::after {
        content: " - Luca";
        font-weight: bold;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-top: 2rem;
    }
</style>