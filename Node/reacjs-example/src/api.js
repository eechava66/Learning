import axios from 'axios'

export async function getUserById(userId){
    const user = await axios.get('b0487e08.ngrok.io/searchUser${userId}')
}