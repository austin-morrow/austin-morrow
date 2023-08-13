<template>
  <div name="contact" class="contact w-full pt-12 p-4">
    <div class="flex justify-center">
      <div style="width: 100%; height: 500px; max-width: 100vw; overflow: hidden;">
        <iframe
          title="contact"
          id="hectic-form"
          allowtransparency="true"
          style="padding: 0px; margin: 0px; border: 0; width: 100%; height: 100%;"
          :src="iframeSrc"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc:
        'https://hello.withmoxie.com/01/austin-morrow1/discovery-form---new-website?inFrame=true&sourceUrl=' +
        encodeURIComponent(window.location.href),
    };
  },
};
</script>

<style>
.contact {
  background-color: #1f1f1f;
}
</style>
