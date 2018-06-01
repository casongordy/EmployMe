<template>
  <div>
    <h1>gig Seekers</h1>
    <h2>New Gigs</h2>
    <h5>Past Gigs</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste mollitia nobis officiis quia, ut vero.</p>
    <ul>poster Information</ul>
      <li>Email: {{ winningEmail }}</li>
    <li>Name: {{winningName}}</li>
    <li>Phone Number: {{ winningNumbers}}</li>
  </div>
</template>

<script>
  export default {
    name: "giggs"
    data() {
      return {
        email: /*put your email*/,
        name:  /*put your name*/,
        phoneNumber:  /*put your Phone Number*/
      }
    }
  }
</script>

<style scoped>

</style>
