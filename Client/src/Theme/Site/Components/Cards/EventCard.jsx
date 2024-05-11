import { useState } from "react";
import { useAuth } from "@/Theme/Site/Components/Auth/auth"
import { useConfig, useLang } from "@/lib";
import useAxios from "@/Theme/Site/Utils/useAxios"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EventCard({ item, media, formUrl ,page="list" }) {
    const { user } = useAuth({ middleware: 'guest' })
    const { mediaPath } = useConfig();
    const { local, Lang } = useLang()
    const router = useRouter();
    const [classRegister, setClassRegister] = useState("theme-bg")
    const [textRegister, setTextRegisterr] = useState("register_now")
    const [enrollStatus, setenrollStatus] = useState()
    const [mentorStatus, setMentorStatus] = useState()
    const classDiv = page=='list' ? "col-xl-6 col-lg-6 col-md-6 col-sm-12":"col-xl-4 col-lg-4 col-md-4 col-sm-12" ;
    
    const registrationRequest = (id) => {
        if (!user) {
            router.push('/' + local + '/login')
        }
        let data = {
            event_id: id
            // event_id: item?.id
        }

        // useAxios(`/${local}${formUrl}"/insert?event_id="${id}`, 'post', setMentorStatus, null, data, null, true)
        // useAxios(`/en/events/insert?event_id=${id}`, 'post', setMentorStatus, null, data, null, true) // post or get??
        useAxios(`/${local}/events/insert?event_id=${id}`, 'post', setMentorStatus, null, data, null, true)
        setClassRegister("bg-danger");
        setTextRegisterr("your_are_registered");
    }

    return item && <>
            <div className={classDiv}>
                <div className="crs_grid">
                    <div className="crs_grid_thumb">
                        <Link href={"/"+local+formUrl+"/"+item?.id} className="crs_detail_link">
                            <img src={mediaPath+"/"+media+"/"+item?.thumb} className="img-fluid rounded" alt="" />
                            {/* <Image src={mediaPath+"/"+media+"/"+item?.thumb} className="img-fluid rounded" alt={item?.title} width="" height=""  /> */}
                        </Link>
                        {/* <div className="crs_video_ico">
                            <i className="fa fa-play"></i>
                        </div>
                        <div className="crs_locked_ico">
                            <i className="fa fa-lock"></i>
                        </div> */}
                    </div>
                    <div className="crs_grid_caption">
                        {/* <div className="crs_tutor_thumb overl_top">
                            <Link href={"/"+local+formUrl+"/"+item?.id}>
                                <img src={mediaPath+"/users/"+item?.speakers?.[0]?.pic} className="img-fluid circle" alt="speaker Pic" />
                            </Link>
                        </div> */}
                        <div className={"crs_cates "+item?.topic?.color}><span>{item?.topic?.["title_"+local]}</span></div>
                        <div className="crs_title">
                            <h4><Link href={"/"+local+formUrl+"/"+item?.id} className="crs_title_link">{item?.title}</Link></h4>
                        </div>
                        <h6>{Lang("public.register")+" "+Lang("public.to")+" "}{item?.date_time_register}</h6>
                        {/* <div className="crs_info_detail">
                            <ul>
                                <li><i className="fa fa-video"></i><span>24 Videos</span></li>
                                <li><i className="fa fa-user"></i><span>10k User</span></li>
                                <li><i className="fa fa-eye"></i><span>92k Views</span></li>
                            </ul>
                        </div>
                        <div className="preview_crs_info">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width":"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div> */}
                    </div>
                    <div className="crs_grid_foot">
                        <div className="crs_flex">
                            {/* <div className="crs_fl_first">
                                <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">199</span></h2></div>
                            </div> */}
                            <div className="crs_fl_last">
                                <div className="crs_linkview">
                                    {/* <Link href={"/"+local+formUrl+"/"+item?.id} className="btn btn_view_detail theme-bg text-light" >{Lang("public.register_now")}</Link> */}
                                    <a href="#" className={"btn btn_view_detail text-light "+classRegister} onClick={() => registrationRequest(item?.id)}>
                                        {Lang("public."+textRegister)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}