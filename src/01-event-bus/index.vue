<template>
  <div>
    <NameForm/>
    <NameViewer/>
  </div>
</template>

<script>
import NameForm from "./name-form";
import NameViewer from "./name-viewer";

export default {
  components: {
    NameForm,
    NameViewer,
  },
};
</script>
