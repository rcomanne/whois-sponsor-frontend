import axios from "axios";

export function listSports() {
    console.log('fetchSports');
    return axios.get(`${window.Configs.BASE_URL}/sport/list`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export function createSport(sport) {
    axios.post(`${window.Configs.BASE_URL}/sport/create`, JSON.stringify(sport))
        .then(response => {
            console.log(response)
            window.location.href = `/sports/${response.data.id}`
        })
        .catch(error => {
            if (error.response.status === 400) {
                alert(`${error.response.data.msg}`);
            } else {
                console.log(error)
            }
        })
}

export function findSport(id) {
    console.log(`findSport ${id}`);
    return axios.get(
        `${window.Configs.BASE_URL}/sport/findById`,
        {
            params: {
                id: id
            }
        })
        .then(res => res.data)
        .catch(error => {
            console.log(error);
            window.location.href = "/error"
        })
}