import useFilter from "./useFilter";

export default function Pagination({ items }) {

    const { simple } = useFilter();

    return items?.last_page > 1 && <>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="pagination p-center">
                    <li className="page-item  me-3">
                        <a className={items?.current_page == 1 ? "page-link disabled" : "page-link"}
                            href="javascript:void(0)"
                            onClick={() => { items?.current_page != 1 && simple('page', items?.current_page - 1) }}>
                            <span className="ti-arrow-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        [...Array(items?.last_page)].map((i, index) => {
                            return <li className={items?.current_page == index + 1 ? "page-item active  me-3" : "page-item  me-3"}>
                                <a className={items?.current_page == index + 1 ? "page-link disabled" : "page-link"}
                                    href="javascript:void(0)"
                                    onClick={() => items?.current_page != index + 1 && simple('page', index + 1)}>{index + 1}
                                </a>
                            </li>
                        })
                    }
                    <li className="page-item  me-3">
                        <a className={items?.current_page == items?.last_page ? "page-link disabled" : "page-link"}
                            href="javascript:void(0)"
                            onClick={() => { items?.current_page != items?.last_page && simple('page', items?.current_page + 1) }}>
                            <span className="ti-arrow-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
}