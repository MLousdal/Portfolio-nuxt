<template>
  <section id="contact" class="contact box wrapper">
    <h4>Vil du hører mere?</h4>
    <p>
      Jeg elsker at snakke om mine projekter, så synes du der er noget
      interessant står min inbox altid åben!
    </p>
    <hr />
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/mnqlozdw"
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <label for="full-name"
          >Dit navn:
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Dit navn (skal udfyldes)"
            required=""
            class="input"
          />
        </label>
        <label for="email-address"
          >Din email:
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Din email (skal udfyldes)"
            required=""
          />
        </label>
        <label for="message"
          >Besked:
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Skriv beskeden her.."
          ></textarea>
        </label>
      </fieldset>
      <button type="submit" class="btn-primary">Send Besked</button>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button[type='submit'].btn-primary {
  color: var(--font-color-inverse);
}
</style>
