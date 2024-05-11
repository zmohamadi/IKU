import { useConfig } from "@/lib/config";

const {assetsPath } = useConfig();

export const StudentsReviews = ({params}) => {
    return <>
        <section className="gray">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Our Students <span className="theme-cl">Reviews</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-xl-12 col-lg-12 col-sm-12">
							
							<div className="reviews-slide space">
								
								{/* <!-- Single Item --> */}
								<div className="single_items lios_item">
									<div className="_testimonial_wrios shadow_none">
										<div className="_testimonial_flex">
											<div className="_testimonial_flex_first">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/user-1.jpg"} className="img-fluid" alt="" />
												</div>
												<div className="_tsl_flex_capst">
													<h5>Susan D. Murphy</h5>
													<div className="_ovr_posts"><span>CEO, Leader</span></div>
													<div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
												</div>
											</div>
											<div className="_testimonial_flex_first_last">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/c-1.png"} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										
										<div className="facts-detail">
											<p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
										</div>
									</div>
								</div>
								
								{/* <!-- Single Item --> */}
								<div className="single_items lios_item">
									<div className="_testimonial_wrios shadow_none">
										<div className="_testimonial_flex">
											<div className="_testimonial_flex_first">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/user-2.jpg"} className="img-fluid" alt="" />
												</div>
												<div className="_tsl_flex_capst">
													<h5>Maxine E. Gagliardi</h5>
													<div className="_ovr_posts"><span>Apple CEO</span></div>
													<div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.5</div>
												</div>
											</div>
											<div className="_testimonial_flex_first_last">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/c-2.png"} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										
										<div className="facts-detail">
											<p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
										</div>
									</div>
								</div>
								
								{/* <!-- Single Item --> */}
								<div className="single_items lios_item">
									<div className="_testimonial_wrios shadow_none">
										<div className="_testimonial_flex">
											<div className="_testimonial_flex_first">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/user-3.jpg"} className="img-fluid" alt="" />
												</div>
												<div className="_tsl_flex_capst">
													<h5>Roy M. Cardona</h5>
													<div className="_ovr_posts"><span>Google Founder</span></div>
													<div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.9</div>
												</div>
											</div>
											<div className="_testimonial_flex_first_last">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/c-3.png"} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										
										<div className="facts-detail">
											<p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
										</div>
									</div>
								</div>
								
								{/* <!-- Single Item --> */}
								<div className="single_items lios_item">
									<div className="_testimonial_wrios shadow_none">
										<div className="_testimonial_flex">
											<div className="_testimonial_flex_first">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/user-4.jpg"} className="img-fluid" alt="" />
												</div>
												<div className="_tsl_flex_capst">
													<h5>Dorothy K. Shipton</h5>
													<div className="_ovr_posts"><span>Linkedin Leader</span></div>
													<div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
												</div>
											</div>
											<div className="_testimonial_flex_first_last">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/c-4.png"} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										
										<div className="facts-detail">
											<p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
										</div>
									</div>
								</div>
								
								{/* <!-- Single Item --> */}
								<div className="single_items lios_item">
									<div className="_testimonial_wrios shadow_none">
										<div className="_testimonial_flex">
											<div className="_testimonial_flex_first">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/user-5.jpg"} className="img-fluid" alt="" />
												</div>
												<div className="_tsl_flex_capst">
													<h5>Robert P. McKissack</h5>
													<div className="_ovr_posts"><span>CEO, Leader</span></div>
													<div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
												</div>
											</div>
											<div className="_testimonial_flex_first_last">
												<div className="_tsl_flex_thumb">
													<img src={assetsPath+"/img/c-5.png"} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										
										<div className="facts-detail">
											<p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
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