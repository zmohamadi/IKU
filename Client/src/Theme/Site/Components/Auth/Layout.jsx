import { config } from "@/lib"

export const Layout = ({ children }) => {

    return <>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
                        <div className="crs_log_wrap">
                            <div className="crs_log__thumb">
                                <img className="img-fluid" alt="" src={config.assets() + "/img/Log In.png"} />
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}