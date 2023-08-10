<script lang="ts">
  import { page } from "$app/stores"

  let contactReasons = [
    {
      text: 'I want to hire you',
      answer: 'hire'
    },
    {
      text: 'I want to collaborate with you',
      answer: 'collaborate'
    },
    {
      text: 'I want to ask you a question',
      answer: 'question'
    },
    {
      text: 'I want to report a bug',
      answer: 'bug'
    }
  ]

  let reasonSelected: {text: string, answer: string} = contactReasons[0];
  let reasonAnswer = '';

  const handleSubmit = async (event: Event) => {
    console.log('Form submitted with these values: ', {event, reasonSelected, reasonAnswer})
  }
</script>

<h1>hire me</h1>
<p>Are you looking for a professional who can empower your business? I'm available for hire. Fill out the form below and I'll get back to you as soon as possible.</p>
<form on:submit|preventDefault={handleSubmit}>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Your email" required>
  <label for="reason">Contact reason</label>
  <select id="reason" value={reasonSelected} on:change={() => (reasonAnswer = '')}>
    {#each contactReasons as reason}
      <option value={reason}>
        {reason.text}
      </option>
    {/each}
  </select>
  <label for="message">Message</label>
  <textarea id="message" name="message" placeholder="Your message" required></textarea>
  <button type="submit">Send</button>
</form>