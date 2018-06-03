<template>
  <div id="app">
    <h3>reading</h3>
    <ul>
      <li v-for='item in reading'>
        <a :href="item.url"> {{ item.title }} </a>
        {{ item.author }} {{ item.current }}
        <img :src='item.img' width='100px'>
        <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(item)"></span>
        <button @click='finishBook(item)'> finished </button>
      </li>
    </ul>
    <h3>want to read</h3>
    <ul>
      <li v-for='item in wantToRead'>
        <a :href="item.url"> {{ item.title }} </a>
        {{ item.author }}
        <img :src='item.img' width='100px'>
        <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(item)"></span>
        <button @click='readingBook(item)'> Reading </button>
      </li>
    </ul>

    <h3>finished</h3>
    <ul>
      <li v-for='item in finished'>
        <a :href="item.url"> {{ item.title }} </a>
        {{ item.author }} {{ item.current }}
        <img :src='item.img' width='100px'>
        <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(item)"></span>
      </li>
    </ul>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Books</h3>
      </div>
      <div class="panel-body">
        <form id='form' class='form-inline' v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class='form-control' v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">img url:</label>
            <input type="text" id="bookUrl" class='form-control' v-model="newBook.img">
          </div>
          <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" id="bookUrl" class='form-control' v-model="newBook.url">
          </div>
          <div class="form-group">
            <label for="sel1">Select list:</label>
            <select class="form-control" id="sel1" v-model='newBook.current'>
              <option selected>Reading</option>
              <option>Want to read</option>
              <option>Finished</option>
            </select>
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import toastr from 'toastr'
  let config = {
    apiKey: "AIzaSyDWP8xQbR6I7S19qSDdi0ZM30RWznLydsE",
    authDomain: "vuejs-firebase-01-32a6c.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-32a6c.firebaseio.com",
    projectId: "vuejs-firebase-01-32a6c",
    storageBucket: "vuejs-firebase-01-32a6c.appspot.com",
    messagingSenderId: "754734383083"
  };

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let booksRef = db.ref('books')

  export default {
    name: 'App',
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          url: 'http://',
          img: '',
          current: 'Reading'
        }
      }
    },
    firebase: {
      books: booksRef
    },
    methods: {
      addBook() {
        booksRef.push(this.newBook);
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.url = '';
        this.newBook.current = '';
        this.newBook.img = '';
        toastr.success('Book added successfully');
      },
      removeBook(book) {
        booksRef.child(book['.key']).remove();
        toastr.success('Book removed successfully');
      },
      finishBook(item) {
        this.newBook.current = 'Finished';
        this.newBook.title = item.title;
        this.newBook.author = item.author;
        this.newBook.url = item.url;
        this.newBook.img = item.img;
        booksRef.push(this.newBook);
        booksRef.child(item['.key']).remove();
      },
      readingBook(item) {
        this.newBook.current = 'Reading';
        this.newBook.title = item.title;
        this.newBook.author = item.author;
        this.newBook.url = item.url;
        this.newBook.img = item.img;
        booksRef.push(this.newBook);
        booksRef.child(item['.key']).remove();
      }
    }, computed: {
      reading: function () {
        return this.books.filter(function (bookReading) {
          return bookReading.current === 'Reading'
        })
      },
      wantToRead: function () {
        return this.books.filter(function (bookWant) {
          return bookWant.current === 'Want to read'
        })
      },
      finished: function () {
        return this.books.filter(function (bookFinished) {
          return bookFinished.current === 'Finished'
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>