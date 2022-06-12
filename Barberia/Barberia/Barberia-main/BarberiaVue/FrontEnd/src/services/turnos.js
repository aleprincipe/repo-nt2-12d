import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getTurnos(){
        return apiClient.get('/api/turnos/lista')
    },
}