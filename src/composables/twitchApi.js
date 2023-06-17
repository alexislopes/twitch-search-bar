import axios from "axios"
import { computed, onMounted } from "vue"

export const useTwitchApi = () => {

  const token = computed(() => {
    return localStorage.getItem('token')
  })

  const auth = () => {
    return axios.post(`https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}&grant_type=client_credentials`)
  }

  const searchChannel = (term) => {
    return axios.get(`https://api.twitch.tv/helix/search/channels?query=${term}`, { headers: { Authorization: `Bearer ${token.value}`, 'Client-Id': import.meta.env.VITE_CLIENT_ID } })
  }

  const validate = (token) => {
    return axios.get('https://id.twitch.tv/oauth2/validate', { headers: { Authorization: `OAuth ${token}` } })
  }

  onMounted(async () => {

    await validate(token.value).catch(async err => {
      auth().then(({ data }) => {
        localStorage.setItem('token', data.access_token)
      })
    });
  })

  return { searchChannel }
}