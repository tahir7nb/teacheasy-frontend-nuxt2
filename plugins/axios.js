// In your Nuxt.js project's plugin file (e.g., axios.js in plugins directory)
export default function ({ $axios }) {
    $axios.defaults.baseURL = 'http://127.0.0.1:8000/';
    // $axios.defaults.baseURL = 'https://7ff3-116-71-182-227.ngrok-free.app';
    // $axios.defaults.headers.common['token'] = localStorage.getItem('oauthToken');
}
