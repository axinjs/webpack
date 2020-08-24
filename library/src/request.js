import axios from 'axios'

axios.get('/api/13a9249208c0dbcf0e5f7cd2000f89ff/lists/lists')
  .then(res => {
    console.log(res)
  })