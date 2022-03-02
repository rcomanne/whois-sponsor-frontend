import axios from "axios";

export function listSports() {
    console.log('fetchSports');
    return axios.get('http://localhost:8080/sport/list')
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export function createSport(sport) {
    axios.post('http://localhost:8080/sport/create', JSON.stringify(sport))
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
        'http://localhost:8080/sport/findById',
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