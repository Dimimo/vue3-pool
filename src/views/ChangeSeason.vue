<script>
import { mapState } from "vuex";
export default {
  name: "ChangeSeason",
  // eslint-disable-next-line
  computed: mapState(["season"]),
  methods: {
    // eslint-disable-next-line
    changeSeason() {
      this.$store.dispatch("postSeason", this.season).then(() => {
          console.log(this.$router.currentRoute.value.fullPath);
        this.$router.back();
      });
    },
  },
  // eslint-disable-next-line
  mounted() {
    if (this.$route.params.year) {
      this.season = this.$route.params.year + "/" + this.$route.params.month;
      this.changeSeason();
    }
  },
};
</script>