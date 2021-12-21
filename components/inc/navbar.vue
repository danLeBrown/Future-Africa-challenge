<template>
  <div>
    <nav>
      <v-container class="nav-container">
        <div>
          <nuxt-link to="/" class="home-link"
            ><h3><i class="icon bi bi-house"></i> HOME</h3></nuxt-link
          >
        </div>
        <div>
          <div class="btn-div">
            <nuxt-link to="/questions" class="btn action-btn"
              ><i class="icon bi bi-card-text"></i> Take the quiz</nuxt-link
            >
          </div>
        </div>
      </v-container>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  z-index: 2;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-link {
  color: #000;
  text-decoration: none;
}
</style>
