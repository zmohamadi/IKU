import { useConfig } from "@/lib/config";

const {assetsPath } = useConfig();

export const Hero = ({text,local}) => {
    return <>
       <div className="hero_banner image-cover image_bottom" style={{backgroundImage:"url("+assetsPath+"/img/banner-1.png)",backgroundRepeat:'no-repeat',backgroundColor:"#e1f0eb"}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-10 col-sm-12">
							<div className="simple-search-wrap">
								<div className="hero_search-2 text-center">
									<div className="elsio_tag">Empowerment through Education </div>
										<h1 className="banner_title mb-4" dangerouslySetInnerHTML={{ __html: text?.['title_'+local] }}></h1>
									<p className="text-center font-lg mb-4" dangerouslySetInnerHTML={{ __html: text?.['text_'+local]}}></p>
									<div className="input-group simple_search">
										<i className="fa fa-search ico"></i>
										<input type="text" className="form-control" placeholder="Search Your Cources" />
										<div className="input-group-append">
											<button className="btn theme-bg" type="button">Search</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
}