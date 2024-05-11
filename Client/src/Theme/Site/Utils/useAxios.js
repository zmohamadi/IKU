import { config } from "@/lib"

// import axios from './axios'
import { Notif } from "./Notif"
import axios from "@/lib/axios";


export default async function useAxios(url, method, setVariable, form = null, data = null, callback = null, loadingNotif = false, notif = false, setError = null, onlyErrNotif = true) {

    var query = null;
    var options;

    if (form == null) {
        if (data !== null) {
            query = data
        }
    } else {
        query = new FormData(form)
    }

    options = {
        url: config.host() + url,
        method: method,
        credentials: 'include'
    }

    if (method == 'get') {
        options['params'] = query
    } else {
        options['data'] = query
    }

    const id = loadingNotif ? Notif('loading', "sendig request...") : null


    await axios(options)
        .then((response) => {

            if (setVariable) {
                setVariable(response.data)
            }

            if (callback) {
                callback()
            }

            loadingNotif ? Notif('update', response.data.message, { id: id, type: 'success' }) : ''
            notif ? Notif('success', response.data.message) : ''
        })
        .catch((error) => {
            loadingNotif ? Notif('update', error.message, { id: id, type: 'error' }) : ''
            onlyErrNotif ? Notif('error', error.message) : ''
            error?.response?.status == 422 && setError(error?.response?.data?.errors, { type: "focus" }, { shouldFocus: true })
        })

}