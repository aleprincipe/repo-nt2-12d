import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getServicios(){
        return apiClient.get('/api/servicios')
    },
    deleteServicio(id) {
        return apiClient.delete('/api/eliminarservicio/'+ id)
    }
}