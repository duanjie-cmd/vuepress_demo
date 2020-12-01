<template>
  <div class="SpecialLayout">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
    <div class="content">
        <div class="top">
            <div class="partners_header_content">
                <h2 class=""><Content slot-key="title1"/></h2>
                <h5><Content slot-key="title2"/></h5>
            </div>
        </div>
    </div>
    <div>
        <div class="title">
            <Content slot-key="img"/>
            <Content slot-key="text"/>
        </div>
        <div class="content">
            <Content slot-key="content"/>
        </div>
    </div>

    <Content/>

  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
export default {
  name: 'SpecialLayout',
  components: {Navbar},
  props: {},
  data () {
    return {}
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
  },
  watch: {},
  created () {
  },
  mounted () {},
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
  }
}
</script>

<style lang="less" scoped>
.SpecialLayout {
    .content {
        padding-top: 57.59px;
        .top {
            background: url(/partner.svg) no-repeat center center;
            background-size: cover;
            height: 460px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            .partners_header_content {
                text-align: center;
                h2 {
                    font-size: 60px;
                    line-height: 84px;
                    font-weight: lighter;
                    color: #fff;
                }
                h5 {
                    margin-top: 20px;
                    font-size: 22px;
                    line-height: 30px;
                    font-weight: lighter;
                    color: #fff;
                }
            }
        }
    }
}
</style>
