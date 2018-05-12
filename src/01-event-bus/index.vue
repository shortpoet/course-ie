<template>
  <div>
    <NameForm/>
    <NameViewer/>
  </div>
</template>

<script>
import NameForm from "./Nameform";
import NameViewer from "./NameViewer";

export default {
  components: {
    NameForm,
    NameViewer,
  },
};
</script>
