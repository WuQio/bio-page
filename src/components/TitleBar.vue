<template>
  <div>
    <mu-appbar style="width: 100%;" color="grey700">

      @Page

      <mu-menu slot="right">
<!--        <mu-button flat style="font-size: 22px; background-color: #424242">-->
<!--          随便看看-->
<!--          <mu-icon value="expand_more" right></mu-icon>-->
<!--        </mu-button>-->

        <mu-list slot="content">
          <mu-list-item button>
            属灵伟人小传
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
