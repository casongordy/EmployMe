new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  ready: function () {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function () {
      var events = [];
      this.$http.get('/api/events')
        .success(function (events) {
          this.$set('events', events);
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addEvent: function () {
      if (this.event.title.trim()) {
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent: function (id) {
      if (confirm('Are you sure you want to delete this event?')) {        
        this.$http.delete('api/events/' + id)
          .success(function (res) {
            console.log(res);
            var index = this.events.find(x => x.id === id)
            this.events.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});
var nav = new Vue({
  el: '#nav',
  methods: {
    open: function (which, e) {
      e.preventDefault();
      modal.active = which;
    },
  }
});

var modal_submit_register = 'Register';
var modal_submit_password = 'Reset Password';
var modal_submit_login = 'Login';

var modal = new Vue({
  el: '#login-modal',
  data: {
    active: null,
    submitted: null,

    // Submit button text
    registerSubmit: modal_submit_register,
    passwordSubmit: modal_submit_password,
    loginSubmit: modal_submit_login,

    // Modal text fields
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    loginUser: '',
    loginPassword: '',
    passwordEmail: '',

    // Modal error messages
    registerError: '',
    loginError: '',
    passwordError: '',
  },
  methods: {
    close: function (e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    flip: function (which, e) {
      e.preventDefault();
      if (which !== this.active) {
        this.active = which;
      }
    },
    submit: function (which, e) {
      e.preventDefault();
      this.submitted = which
      var data = {
        form: which
      };

      switch (which) {
        case 'register':
          data.name = this.registerName;
          data.email = this.registerEmail;
          data.password = this.registerPassword;
          this.$set('registerSubmit', 'Registering...');
          break;
        case 'login':
          data.user = this.loginUser;
          data.password = this.loginPassword;
          this.$set('loginSubmit', 'Logging In...');
          break;
        case 'password':
          data.email = this.passwordEmail;
          this.$set('passwordSubmit', 'Resetting Password...')
          break;
      }

      // TODO: submit our `data` variable
    }
  }
});