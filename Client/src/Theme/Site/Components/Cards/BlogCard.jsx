import { useConfig, useLang } from "@/lib";
import Link from "next/link";
import Img from "../../Utils/Img";

export default function BlogCard({ item, media, formUrl }) {

    const { mediaPath, assetsPath } = useConfig();
    const { local, Lang } = useLang()
    return item && <>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
                <div className="blg_grid_thumb">
                    <Link href={"/" + local + formUrl + "/" + item.id}>
                        <img className="img-fluid" src={mediaPath + "/" + media + item.thumb} alt="blog pic" />
                    </Link>
                </div>
                <div className="blg_grid_caption">
                    <div className="blg_tag"><span>{item?.subject?.['title_en']}</span></div>
                    <div className="blg_title"><h4>
                        <Link href={"/" + local + formUrl + "/" + item.id}>
                            {item?.title}
                        </Link>
                    </h4>
                    </div>
                    <div className="blg_desc text-justify line-clamp-3" dangerouslySetInnerHTML={{ __html: item.summary }}></div>
                </div>
                <div className="crs_grid_foot">
                    <div className="crs_flex">
                        {/* <div className="crs_fl_first">
                            <div className="crs_tutor">
                                <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src={assetsPath+"/img/team-5.jpg"} className="img-fluid circle" alt="" /></a></div>
                            </div>
                        </div> */}
                        <div className="crs_fl_first">
                            <div className="foot_list_info">
                                <ul>
                                    <li><div className="elsio_ic"><i className="fa fa-eye text-success"></i></div><div className="elsio_tx">{item?.count_view} Views</div></li>
                                    <li><div className="elsio_ic"><i className="fa fa-clock text-warning"></i></div><div className="elsio_tx">{item?.created_at}</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}