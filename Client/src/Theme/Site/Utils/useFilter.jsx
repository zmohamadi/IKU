import { usePathname, useRouter } from 'next/navigation'
import { Notif } from './Notif';

export default function useFilter() {
    const pathname = usePathname()
    const router = useRouter();

    const simple = (field, value, type = 'normal') => {
        if ('URLSearchParams' in window) {
            var jsSearchParams = new URLSearchParams(window.location.search)

            value ? jsSearchParams.set(field, value) : jsSearchParams.delete(field)

            push_state(jsSearchParams)

            if (field == 'sort' || field == 'page' || type == 'fetch') {
                apply_filter()
            }

        } else {
            Notif('error', 'your browser is oldest, please update it')
        }
    }

    const arrayfilter = (fields) => {
        if ('URLSearchParams' in window) {
            var jsSearchParams = new URLSearchParams(window.location.search)

            Object.keys(fields).map((field) => {
                fields[field] ?
                    jsSearchParams.set(field, fields[field])
                    : jsSearchParams.delete(field)
            })

            jsSearchParams.set('page', 1)

            push_state(jsSearchParams)

        } else {
            Notif('error', 'your browser is oldest, please update it')
        }
    }

    const checked = (field, value) => {
        if (!value) {
            return
        }

        if ('URLSearchParams' in window) {
            var jsSearchParams = new URLSearchParams(window.location.search)

            if (jsSearchParams.get(field) === value) {
                jsSearchParams.delete(field)
            } else {
                jsSearchParams.set(field, value)
            }
            value ? jsSearchParams.set(field, value) : jsSearchParams.delete(field)

            push_state(jsSearchParams)

        } else {
            Notif('error', 'your browser is oldest, please update it')
        }
    }

    const multi_checked = (field, value, type = 'addFilter') => {
        if (!value) {
            return
        }

        if ('URLSearchParams' in window) {
            var jsSearchParams = new URLSearchParams(window.location.search)
            var key = jsSearchParams.get(field);

            if (key === null) {
                jsSearchParams.set(field, value)
            } else {
                if (key.includes(value)) {
                    key = key.replace(value + ',', '').replace(value, '').replace(',,', ',');
                } else {
                    key = key + "," + value;
                }

                jsSearchParams.set(field, key)
            }

            jsSearchParams = jsSearchParams.toString()
            jsSearchParams.replace(/,\s*$/, "")

            if (key == '') {
                jsSearchParams = jsSearchParams.replace('&' + field + '=', '').replace(field + '=', '')
            }

            push_state(jsSearchParams)

            type == 'remove' && apply_filter()

        } else {
            Notif('error', 'your browser is oldest, please update it')
        }
    }

    function push_state(params) {

        var query = '?' + params.toString();
        query = query.replace("&&", "&").replace('?&', '?').replace('?,&', '?').replace('=,', '').replace(',,', ',')

        var newRelativePathQuery = pathname + query;

        // router.push(newRelativePathQuery);
        window.history.pushState({}, "", newRelativePathQuery);
    }


    const apply_filter = () => {
        var jsSearchParams = new URLSearchParams(window.location.search)
        jsSearchParams = '?' + jsSearchParams.toString()
        
        var newRelativePathQuery = pathname + jsSearchParams;
        router.push(newRelativePathQuery);
    }

    const remove_filter = (field) => {
        var jsSearchParams = new URLSearchParams(window.location.search)

        jsSearchParams.delete(field)

        if (field == 'search') {
            $('input#search').html('')
        }

        push_state(jsSearchParams)
        apply_filter()
    }

    return { simple, arrayfilter, checked, multi_checked, apply_filter, remove_filter };
}