import { useConfig } from "@/lib/config";
import Link from "next/link";

export const Categories = ({text,local,data}) => {
	const { mediaPath } = useConfig();

    return <>
        <section className="min gray">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
							<h2 dangerouslySetInnerHTML={{ __html: text?.['title_'+local] }}></h2>
								<p>{text?.['text_'+local]}</p>
							</div>
						</div>
					</div>
					
					
					<div className="row justify-content-center">
						{/* <!-- Single Category --> */}
						{
							data?.map((cat) => {
								return <>
									<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
										<div className="crs_cate_wrap style_2">
											<Link href={"/"+local+"/courses?category="+cat.id} className="crs_cate_box">
												<div className="crs_cate_icon">
													
													<img className="img-fluid" src={mediaPath + "/courseCategories/"+ cat?.pic} alt=" pic" />
												</div>
												<div className="crs_cate_caption"><span>{cat?.['title_'+local]}</span></div>
											</Link>
											
										</div>
									</div>
								</>
							})
						}
						
					</div>
					
				</div>
			</section>
			<div className="clearfix"></div>
    </>
}