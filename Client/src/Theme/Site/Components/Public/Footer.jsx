import { useConfig } from "@/lib/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tools, useData } from "@/Theme/Midone";

export const Footer = ({params}) => {
	// console.log(params);
	const {assetsPath } = useConfig();
	let { getNeedles } = useData();
    let [needles, setNeedles] = useState({});
    const formUrl = "/footer";
    const local = params?.lang ?  params?.lang : "en" ;

	useEffect(() => {
		getNeedles(local + formUrl, setNeedles);
    }, []);


    return <>
       <footer className="dark-footer skin-dark-footer style-2">
				<div className="footer-middle">
					<div className="container">
						<div className="row">
							
							<div className="col-lg-5 col-md-5">
								<div className="footer_widget">
									<img src={assetsPath+"/img/logo-light.png"} className="img-footer small mb-2" alt="" />
									<h4 className="extream mb-3">Afghan Women's Academy</h4>
									<p className="text-justify">Welcome to a space where Afghan women's aspirations meet opportunity. At the Afghan Women's Academy, we believe in the transformative power of education. Our free courses are designed to unlock potential, open new horizons, and build a strong community of skilled, knowledgeable women ready to lead.</p>
									{/* <div className="foot-news-last">
										<div className="input-group">
										  <input type="text" className="form-control" placeholder="Email Address" />
											<div className="input-group-append">
												<button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							
							<div className="col-lg-6 col-md-7 ml-auto">
								<div className="row">
								
									<div className="col-lg-4 col-md-4">
										<div className="footer_widget">
											<h4 className="widget_title">Courses</h4>
											<ul className="footer-menu">
												{Tools.getArray(needles?.category).map((cat,index)=>{
													return <li><Link href={"/en/courses?category="+cat?.id}>{cat?.['title_'+local]}</Link></li>
												})}
											</ul>
										</div>
									</div>
											
									<div className="col-lg-4 col-md-4">
										<div className="footer_widget">
											<h4 className="widget_title">Education Level</h4>
											<ul className="footer-menu">
												{Tools.getArray(needles?.level).map((le,index)=>{
													return <li><Link href={"/en/courses?level="+le?.id}>{le?.['title_'+local]}</Link></li>
												})}
												
											</ul>
										</div>
									</div>
							
									<div className="col-lg-4 col-md-4">
										<div className="footer_widget">
											<h4 className="widget_title">academy</h4>
											<ul className="footer-menu">
												<li><Link href="/en">Home</Link></li>
												<li><Link href="/en/courses">Courses</Link></li>
												<li><Link href="/en/events">Events</Link></li>
												<li><Link href="/en/mentorship">Mentorship</Link></li>												
												<li><Link href="https://forum.afg-womens-academy.org/index.php">Forum</Link></li>
												<li><Link href="/en/blogs">Blog</Link></li>
												<li><Link href="/en/about-us">About Us</Link></li>
												<li><Link href="/en/contact-us">Contact Us</Link></li>
												
											</ul>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12 col-md-12 text-center">
								<p className="mb-0">© 2024 AWA. Designd By <a href="">Sanegar</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
    </>
}