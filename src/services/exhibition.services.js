import axios from 'axios'

class ExhibitionServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/exhibitions`
        })

        this.axiosApp.interceptors.request.use(config => {

            console.log('PRUEBA')
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config
        })
    }

    getAllExhibitions() {
        return this.axiosApp.get('/')
    }

    getAllArtworksForExhibition(exhibitionId, artworkData) {
        return this.axiosApp.get(`/${exhibitionId}`, artworkData);
    }


    getOneExhibition(exhibitionId) {
        return this.axiosApp.get(`/${exhibitionId}`)
    }

    saveExhibition(exhibitionData) {
        return this.axiosApp.post('/', exhibitionData)
    }

    editExhibition(exhibitionId, exhibitionData) {
        return this.axiosApp.put(`/${exhibitionId}`, exhibitionData)
    }

    deleteExhibition(exhibitionId) {
        return this.axiosApp.delete(`/${exhibitionId}`)
    }

}

const exhibitionServices = new ExhibitionServices()

export default exhibitionServices