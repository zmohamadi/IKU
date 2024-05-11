import axios from "axios"

export default function Axios({ url, method, variable, callback = null }) {
    const options = {
        url: Config.get_db_host() + url + '?id_gte=6&_sort=id&_order=DESC',
        method: method,
        header: {
            'content-type': 'appllications/json'
        }
    }
    const id = toast.loading("Receiving information...")

    axios(options)
        .then((response) => {
            setTimeout(() => {
                
            }, 800)
            variable(response.data)
        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log(error.message);
        })

}