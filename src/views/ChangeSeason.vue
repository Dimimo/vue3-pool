<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent ({
  name: "ChangeSeason",
  computed: mapState(["season"]),
  methods: {
    changeSeason() {
      this.$store.dispatch("postSeason", this.season).then(() => {
        this.$router.replace("/results");
      });
    },
  },
  mounted() {
    if (this.$route.params.year) {
      this.season = this.$route.params.year + "/" + this.$route.params.month;
      this.changeSeason();
    }
  },
});
</script>