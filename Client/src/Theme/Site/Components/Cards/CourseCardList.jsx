import { useConfig, useLang } from "@/lib";
import Link from "next/link";
import Img from "../../Utils/Img";
import useFilter from "../../Utils/useFilter";

export default function CourseCardList({ item, media, formUrl, page = "list" }) {

    const { local, Lang } = useLang()
    const { simple } = useFilter()
    return item && <>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="crs_lt_2">
                <div className="crs_lt_boxes">
                    <div className="crs_grid_list_thumb">
                        <Link href={"/" + local + formUrl + "/" + item.id} className="crs_title_link">
                            <Img className="img-fluid rounded" src={media + item.thumbnail} defaultSrc={media + "default.jpg"} alt="course pic" />
                        </Link>
                    </div>

                    <div className="crs_grid_list_caption">
                        <div className="crs_lt_101">
                            <span className="est st_4">{item.category?.title_en}</span>
                        </div>
                        <div className="crs_lt_102">
                            <h4 className="crs_tit">{item.title}</h4>
                            <span className="crs_auth"><i>By</i>  <Link href="javascript:void(0)" onClick={() => simple('teachers', item.teach?.id, 'fetch')}>{item.teach?.name} {item.teach?.lname}</Link></span>
                        </div>
                        <div className="crs_lt_103">
                            <div className="crs_info_detail">
                                <ul>
                                    <li><i className="fa fa-video"></i><span>{item.content_count} Lectures</span></li>
                                    <li><i className="fa fa-user"></i><span>{item.student_count < 50 ? '<50' : item.student_count.toLocaleString()} {Lang('public.enrolled')}</span></li>
                                    <li><i className="fa fa-eye"></i><span>{item.count_view} Views</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="crs_flex">
                            <div className="crs_fl_first">
                                <div className="crs_price"><h2><span className="theme-cl">Free</span></h2></div>
                            </div>
                            <div className="crs_fl_last">
                                <div className="crs_linkview">
                                    <Link href={"/" + local + formUrl + "/" + item.id} className="btn btn_view_detail theme-bg text-light">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lt_cr_footer">
                    <div className="lt_cr_footer_first">
                        <ul className="lt_cr_list">
                            <li><Link href={"/" + local + formUrl + "/" + item.id} className="prv_li"><i className="fa fa-play text-success"></i>View Preview</Link></li>
                        </ul>
                    </div>
                    <div className="lt_cr_footer_last">
                        <ul className="lt_cr_list">
                            <li><i className="fa fa-lightbulb text-info"></i>{ }</li>
                            <li><i className="fa fa-hourglass-half  text-warning"></i>{item?.duration}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </>
}