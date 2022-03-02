import axios from "axios";

export function fetchAthletes() {
    return axios.get('http://localhost:8080/athlete/list')
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export function createAthlete(athlete) {
    axios.post('http://localhost:8080/athlete/create', JSON.stringify(athlete))
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
    return axios.get('http://localhost:8080/athlete/findById', {
        params: {
            id: id
        }
    })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
        })
}