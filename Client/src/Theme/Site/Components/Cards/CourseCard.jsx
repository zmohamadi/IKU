import { useConfig, useLang } from "@/lib";
import Link from "next/link";
import Img from "../../Utils/Img";
import useFilter from "../../Utils/useFilter";

export default function CourseCard({ item, media, formUrl , page="list" }) {

    const { mediaPath } = useConfig();
    const { local, Lang } = useLang()
    const {simple} = useFilter()
    const classDiv = page=='list' ? "col-xl-6 col-lg-6 col-md-6 col-sm-12":"col-xl-4 col-lg-4 col-md-4 col-sm-12" ;
    return item && <>
        <div className={classDiv}>
            <div className="crs_grid shadow_none brd">
                <div className="crs_grid_thumb">
                    <Link href={"/" + local + formUrl + "/" + item.id} className="crs_title_link">
                        {/* <img src={mediaPath + "/" + media + item.thumbnail} className="img-fluid rounded" alt="" /> */}
                        <Img className="img-fluid" src={media + item.thumbnail} defaultSrc={media + "default.jpg"} alt="course pic" />
                    </Link>
                    {/* <div className="crs_video_ico">
                        <i className="fa fa-play"></i>
                    </div> */}
                    {/* <div className="crs_locked_ico">
                        <i className="fa fa-lock"></i>
                    </div> */}
                </div>
                <div className="crs_grid_caption">
                    <div className="crs_flex">
                        <div className="crs_fl_first">
                            <div className={"crs_cates "+item.category?.color}><span>{item.category?.title_en}</span></div>
                        </div>
                        <div className="crs_fl_last">
                            <div className="crs_inrolled"><strong>{item.student_count < 50 ? '<50' : item.student_count.toLocaleString()}</strong>{Lang('public.enrolled')}</div>
                        </div>
                    </div>
                    <div className="crs_title">
                        <h4>
                            <Link href={"/" + local + formUrl + "/" + item.id} className="crs_title_link">
                                {item.title}
                            </Link>
                        </h4>
                    </div>
                    <div className="crs_info_detail">
                        <ul>
                            <li><i className="fa fa-clock text-danger"></i><span>{item?.duration}</span></li>
                            <li><i className="fa fa-video text-success"></i><span>{item.meeting_count} {Lang('public.Lectures')}</span></li>
                            <li><i className="fa fa-signal text-warning"></i><span>{item.level?.['title_' + local]}</span></li>
                            {/* <li><i className="fa fa-signal text-warning"></i><span>{item.count_view} {Lang('public.view')}</span></li> */}
                        </ul>
                    </div>
                </div>
                <div className="crs_grid_foot">
                    <div className="crs_flex">
                        <div className="crs_fl_first">
                            <div className="crs_tutor">
                                <div className="crs_tutor_thumb">
                                    <Link href="javascript:void(0)" onClick={() => simple('teachers', item.teach?.id, 'fetch')}>
                                        <Img className="img-fluid circle" src={"/users/" + item.teach?.pic} defaultSrc={"/users/Default user/avatar.png"} alt="teacher pic" />
                                    </Link>
                                </div>
                                <div className="crs_tutor_name">
                                    <Link href="javascript:void(0)" onClick={() => simple('teachers', item.teach?.id, 'fetch')}>{item.teach?.name} {item.teach?.lname}</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="crs_fl_last">
                                                    <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">149</span></h2></div>
                                                </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}