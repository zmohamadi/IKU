import { useConfig } from "@/lib/config";
import Link from "next/link";
import Img from "../../Utils/Img";

const {assetsPath,mediaPath } = useConfig();

export const WorkProcess = ({text,local}) => {
	
    return <>
        <section>
				<div className="container">
					
					<div className="row align-items-center justify-content-between mb-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							<div className="lmp_caption">
								<h2 className="mb-3">{text?.[3]?.['title_'+local]}</h2>
								<p className="text-justify">{text?.[3]?.['text_'+local]}</p>
								<div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
									<div className="d-flex align-items-center">
									  <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
										<i className="fas fa-check"></i>
									  </div>
									  <h6 className="mb-0 ml-3" dangerouslySetInnerHTML={{__html:text?.[4]?.['text_'+local]}}></h6>
									</div>
								</div>
								<div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
									<div className="d-flex align-items-center">
									  <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
										<i className="fas fa-check"></i>
									  </div>
									  <h6 className="mb-0 ml-3" dangerouslySetInnerHTML={{__html:text?.[5]?.['text_'+local]}}></h6>
									</div>
								</div>
								<div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
									<div className="d-flex align-items-center">
									  <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
										<i className="fas fa-check"></i>
									  </div>
									  <h6 className="mb-0 ml-3" dangerouslySetInnerHTML={{__html:text?.[6]?.['text_'+local]}}></h6>
									</div>
								</div>
								<div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
									<div className="d-flex align-items-center">
									  <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
										<i className="fas fa-check"></i>
									  </div>
									  <h6 className="mb-0 ml-3" dangerouslySetInnerHTML={{__html:text?.[7]?.['text_'+local]}}></h6>
									</div>
								</div>
								{/* <div className="text-left mt-4">
									<Link className="btn btn-md text-light theme-bg" href="/en/register">Enrolled Today</Link>
								</div> */}
							</div>
						</div>
						
						<div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
							<div className="lmp_thumb">
								<Img className="img-fluid" src={mediaPath+"/sitetext/"+text?.[3]?.image} defaultSrc={"/sitetext/" + "Home_Mentorship.png"} />
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="pt-0">
				<div className="container">				
					<div className="row align-items-center justify-content-between">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							<div className="lmp_thumb">
								<Img className="img-fluid" src={mediaPath+"/sitetext/"+text?.[8]?.image} defaultSrc={"/sitetext/" + "Home_Start_Learning.png"} />
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
							<div className="lmp_caption">
								<ol className="list-unstyled p-0">
								  <li className="d-flex align-items-start my-3 my-md-4">
									<div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg">
									  <div className="position-absolute text-white h5 mb-0">1</div>
									</div>
									<div className="ml-3 ml-md-4">
									  <h4>{text?.[8]?.['title_'+local]}</h4>
									  <p>
									  	{text?.[8]?.['text_'+local]}
									  </p>
									</div>
								  </li>
								  <li className="d-flex align-items-start my-3 my-md-4">
									<div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg">
									  <div className="position-absolute text-white h5 mb-0">3</div>
									</div>
									<div className="ml-3 ml-md-4">
										<h4>{text?.[9]?.['title_'+local]}</h4>
										<p>
											{text?.[9]?.['text_'+local]}
										</p>
									</div>
								  </li>
								   <li className="d-flex align-items-start my-3 my-md-4">
									<div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg">
									  <div className="position-absolute text-white h5 mb-0">3</div>
									</div>
									<div className="ml-3 ml-md-4">
										<h4>{text?.[10]?.['title_'+local]}</h4>
										<p>
											{text?.[10]?.['text_'+local]}
										</p>
									</div>
								  </li>
								  <li className="d-flex align-items-start my-3 my-md-4">
									<div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg">
									  <div className="position-absolute text-white h5 mb-0">4</div>
									</div>
									<div className="ml-3 ml-md-4">
										<h4>{text?.[11]?.['title_'+local]}</h4>
										<p>
											{text?.[11]?.['text_'+local]}
										</p>
									</div>
								  </li>
								</ol>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<div className="clearfix"></div>
    </>
}