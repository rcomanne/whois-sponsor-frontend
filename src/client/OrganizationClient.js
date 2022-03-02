import axios from "axios";

export function listOrganizations() {
    return axios.get(`${window.Configs.BASE_URL}/organization/list`)
        .then(res => res.data)
        .catch(error => {
            console.log(error);
            window.location.href = "/error"
        })
}

export function findOrganization(id) {
    console.log(`findOrganization ${id}`);
    return axios.get(
        `${window.Configs.BASE_URL}/organization/findById`,
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

export function createOrganization(org) {
    axios.post(`${window.Configs.BASE_URL}/organization/create`, JSON.stringify(org))
        .then(response => {
            console.log(response)
            window.location.href = `/organizations/${response.data.id}`
        })
        .catch(error => {
            if (error.response.status === 400) {
                alert(`${error.response.data.msg}`);
            } else {
                console.log(error)
            }
        })
}