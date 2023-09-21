import { APISettings } from '../config.js';
export default {
    name: "hitsMethods",
    async getInitialHits() {
        const response = await fetch(APISettings.baseURL + "actions", {
            mode: 'cors',
            //credentials: 'include',
            method: 'GET',
        });
        const result = await response.json();
        return result;
    },
    async getHits(data) {
        const response = await fetch(APISettings.baseURL + "actions/"+data, {
            mode: 'cors',
            //credentials: 'include',
            method: 'GET',
        });
        const result = await response.json();
        return result;
    },

    async postAction(data) {
        const response = await fetch(APISettings.baseURL + "actions", {
            mode: 'cors',
            //credentials: 'include',
            method: 'POST',
            headers: {
                //'Trusted': 'yes'
            },
            contentType: 'application/json',
            body: data
        }).catch(() => { return false })
        if (response.ok) {
            await response.text();
            return true;
        }
        else {
            return false;
        }
    },

    async editAction(data) {
        const response = await fetch(APISettings.baseURL + "editAction", {
            mode: 'cors',
            //credentials: 'include',
            method: 'POST',
            headers: {
                //'Trusted': 'yes'
            },
            contentType: 'application/json',
            body: data
        }).catch(() => { return false })
        if (response.ok) {
            await response.text();
            return true;
        }
        else {
            return false;
        }
    },

    async deleteAction(data) {
        const response = await fetch(APISettings.baseURL + "deleteAction", {
            mode: 'cors',
            //credentials: 'include',
            method: 'POST',
            headers: {
                //'Trusted': 'yes'
            },
            contentType: 'application/json',
            body: data
        }).catch(() => { return false })
        if (response.ok) {
            await response.text();
            return true;
        }
        else {
            return false;
        }
    },




    async reorder(data) {
        const response = await fetch(APISettings.baseURL + "/reorderNotes", {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: {
                'Trusted': 'yes'
            },
            contentType: 'application/json',
            body: JSON.stringify(data)
        }).catch(() => { return false })
        if (response.ok) {
            const result = await response.text();
            return result;
        }
        else {
            return false;
        }
    },
    async deleteNote(data) {
        const response = await fetch(APISettings.baseURL + "/delete2", {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE',
            contentType: 'application/json',
            body: JSON.stringify(data)
        }).catch(() => { return false })
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            return false;
        }
    }
}
