import { useConfig, useLang } from "@/lib";
import Link from "next/link";
import Img from "../../Utils/Img";
import useFilter from "../../Utils/useFilter";

export default function MentorCard({ item, media, formUrl }) {

    const { mediaPath } = useConfig();
    const { local, Lang } = useLang()
    const { simple } = useFilter()

    return item && <>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="crs_trt_grid theme-light shadow_none">
                <div className="crs_trt_thumb">
                    <Link href={"/" + local + formUrl + "/" + item.id} className="crs_trt_thum_link" tabindex="-1">
                        <Img className="img-fluid" src={"/users/" + item?.pic} defaultSrc={"/users/t-3.png"} alt="mentor pic" />
                    </Link>
                </div>
                <div className="crs_trt_caption large">
                    <div className="instructor_tag dark"><span
                        style={{
                            width: '100%',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >{item.mentorship_topic?.['title_' + local]}</span></div>
                    <div className="instructor_title"><h4><Link href={"/" + local + formUrl + "/" + item.id} tabindex="-1">{item.name} {item.lname ?? ''}</Link></h4></div>
                    {/* <div className="trt_rate_inf">
                    <i className="fa fa-star filled"></i>
                    <i className="fa fa-star filled"></i>
                    <i className="fa fa-star filled"></i>
                    <i className="fa fa-star filled"></i>
                    <i className="fa fa-star-half filled"></i>
                    <span className="alt_rates">(244 Reviews)</span>
                </div> */}
                </div>
            </div>

        </div>
    </>
}