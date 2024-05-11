import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib";
import { Notif } from "./Notif";
import useFilter from "./useFilter";


export default function ShowFilter({ filters }) {
    const { Lang } = useLang();
    const searchParams = useSearchParams();
    const { multi_checked, remove_filter } = useFilter();

    const params = Array.from(searchParams).map(([key]) => key);

    return <>
        <div className="sidebar d-flex align-items-center flex-wrap">
            {
                ('URLSearchParams' in window) ? params?.map((field) => {
                    if (!searchParams.get(field).includes(',')) {

                        if (field == 'page') {
                            return
                        }

                        var value;
                        switch (field) {
                            case 'sort':
                                value = searchParams.get(field) == 'asc' ? Lang('public.oldest') : Lang('public.newest')
                                break;
                            case 'search':
                                value = Lang('search') + ': ' + searchParams.get(field)
                                break;
                            default:
                                filters?.[field]?.options?.map(item => {
                                    if (item.id == searchParams.get(field)) {
                                        value = item[filters[field].label] + (item[filters[field].second_label] ? ' ' + item[filters[field].second_label] : '');
                                    }
                                })
                                break;
                        }
                        return <span className="bg-info mb-2 mx-2">
                            <div role="alert" className="mb-0">
                                <button className="border-0" onClick={() => remove_filter(field)} type="button">X</button>
                                <span className="text-white px-2">{value}</span>
                            </div>
                        </span>
                    } else {
                        var arrayParams = searchParams.get(field).replace(',,', ',').split(',')

                        return filters?.[field]?.options?.map(item => {
                            return arrayParams.map(param => {
                                if (item.id == param) {
                                    return <span className="bg-info mb-2 mx-2">
                                        <div role="alert" className="mb-0">
                                            <button className="border-0" onClick={() => multi_checked(field, param, 'remove')} type="button">X</button>
                                            <span className="text-white px-2">{item[filters[field].label]}</span>
                                        </div>
                                    </span>
                                }
                            })
                        })
                    }

                })
                    :
                    Notif('error', 'your browser is oldest, please update it')
            }
        </div>
    </>
}