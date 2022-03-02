import axios from "axios";

export function fetchAthletes() {
    return axios.get(`${window.Configs.BASE_URL}/athlete/list`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export function createAthlete(athlete) {
    axios.post(`${window.Configs.BASE_URL}/athlete/create`, JSON.stringify(athlete))
        .then(response => {
            console.log(response.data)
            window.location.href = `/athletes/${response.data.id}`
        })
        .catch(error => {
            if (error.response.status === 400) {
                alert(`${error.response.data.msg}`);
            } else {
                console.log(error)
            }
        })
}

export function findAthlete(id) {
    return axios.get(`${window.Configs.BASE_URL}/athlete/findById`, {
        params: {
            id: id
        }
    })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
}