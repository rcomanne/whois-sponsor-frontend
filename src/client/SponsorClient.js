import axios from "axios";

export function listSponsors() {
    return axios.get(`${window.Configs.BASE_URL}/sponsor/list`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export function createSponsor(sponsor) {
    axios.post(`${window.Configs.BASE_URL}/sponsor/create`, JSON.stringify(sponsor))
        .then(response => {
            console.log(response)
            window.location.href = `/sponsors/${response.data.id}`
        })
        .catch(error => {
            if (error.response.status === 400) {
                alert(`${error.response.data.msg}`);
            } else {
                console.log(error)
            }
        })
}

export function findSponsor(id) {
    console.log(`findSponsor ${id}`);
    return axios.get(
        `${window.Configs.BASE_URL}/sponsor/findById`,
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