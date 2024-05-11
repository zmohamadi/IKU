import { useLang } from "@/lib";
import useFilter from "./useFilter";

export default function Sort({ reFetch }) {
    const { Lang } = useLang()
    const { simple } = useFilter({reFetch});

    return <>
        <div className="shorting-right mr-2">
            <label>Short By:</label>
            <div className="dropdown show">
                <a className="btn btn-filter dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="selection">New Listings</span>
                </a>
                <div className="drp-select dropdown-menu">
                    {/* <span className="dropdown-item" onClick={() => simple('sort', 'desc')}>Most Rated</span> */}
                    <span className="dropdown-item" onClick={() => simple('sort', 'asc')}>Most Viewd</span>
                    <span className="dropdown-item" onClick={() => simple('sort', 'desc')}>New Listings</span>
                    {/* <span className="dropdown-item" onClick={() => simple('sort', 'desc')}>High Rated</span> */}
                </div>
            </div>
        </div>
    </>
}