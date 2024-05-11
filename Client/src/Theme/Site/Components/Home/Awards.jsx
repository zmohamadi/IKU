import { useConfig } from "@/lib/config";

const {assetsPath } = useConfig();

export const Awards = ({params}) => {
    return <>
        <section className="p-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="crp_box ovr_top">
								<div className="row align-items-center m-0">
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
										<div className="crp_tags"><h6>Over 700+ Cources in one place</h6></div>
									</div>
									<div className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
										<div className="part_rcp">
											<ul>
												<li><div className="crp_img"><img src={assetsPath+"/img/lg-1.png"} className="img-fluid" alt="" /></div></li>
												<li><div className="crp_img"><img src={assetsPath+"/img/lg-5.png"} className="img-fluid" alt="" /></div></li>
												<li><div className="crp_img"><img src={assetsPath+"/img/lg-6.png"} className="img-fluid" alt="" /></div></li>
												<li><div className="crp_img"><img src={assetsPath+"/img/lg-7.png"} className="img-fluid" alt="" /></div></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
}