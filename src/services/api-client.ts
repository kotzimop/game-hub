import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '03de32905a704fb5b2879a1c8bb9b8c4',
  },
});
