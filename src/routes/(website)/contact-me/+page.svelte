<script lang="ts">

  let contactReasons = [
    {
      text: "I want to hire you",
      answer: "hire"
    },
    {
      text: "I want to collaborate with you",
      answer: "collaborate"
    },
    {
      text: "I want to ask you a question",
      answer: "question"
    },
    {
      text: "I want to report a bug",
      answer: "bug"
    }
  ]

  let reasonSelected: { text: string, answer: string } = contactReasons[0]
  let reasonAnswer = ""

  const handleSubmit = async (event: Event) => {
    console.log("Form submitted with these values: ", { event, reasonSelected, reasonAnswer })
  }
</script>

<h1 class="pageTitle">Contact me</h1>
<p class="pageContent">
  Are you looking for a professional who can empower your business? I'm available for hire.<br />
  Fill out the form below and I'll get back to you as soon as possible.
</p>
<form class="form"

      on:submit|preventDefault={handleSubmit}
>
  <div class="leftSide">
    <label for="name">Name</label>
    <input class="rounded" id="name" name="name" placeholder="Your name" required type="text">
  </div>
  <div class="leftSide">
    <label for="email">Email</label>
    <input class="rounded" id="email" name="email" placeholder="Your email" required type="email">
  </div>
  <div class="leftSide">
    <label for="reason">Contact reason</label>
    <select class="rounded" id="reason" on:change={() => (reasonAnswer = '')} value={reasonSelected}>
      {#each contactReasons as reason}
        <option value={reason}>
          {reason.text}
        </option>
      {/each}
    </select>
  </div>
  <div class="rightSide">
    <label for="message">Message</label>
    <textarea class="rounded" id="message" name="message" placeholder="Your message" required></textarea>
  </div>
  <div class="form-btn-wrapper">
    <button class="form-btn place-self-center text-lg" type="submit">Send</button>
  </div>
</form>

<style lang="postcss">

    .form {
        @apply max-w-xl w-full grid grid-rows-4bit-grid grid-cols-4bit-grid gap-4;
    }

    form > *:not(button) {
        @apply flex flex-col gap-2 flex-grow;
    }

    form > * > *:is(input, textarea, select ) {
        @apply flex-grow border-0;
    }

    .form > .leftSide {
        /*grid-column: 1 / 2;*/
        @apply col-start-1 col-end-1;
    }

    .form > .rightSide {
        grid-column: 2 / -1;
        grid-row: 1 / -2;
    }

    .form > .form-btn-wrapper {
        @apply col-start-3 col-end-[-1] row-start-4 row-end-[-1] grid place-items-center;
    }

</style>