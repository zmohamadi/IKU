import { useLang } from "@/lib";
import { useConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "../Auth/auth";
import Img from "../../Utils/Img";

const { assetsPath } = useConfig();

export const HeaderLight = ({ params }) => {
	const { logout, user, mutate } = useAuth({ middleware: 'guest' })

	const pathname = usePathname()
	const searchParams = useSearchParams();
	const { Lang, local } = useLang();



	const handleLang = (target) => {
		let url = config.front() + pathname

		let newRelativePathQuery = url.replace(new RegExp(config.front() + "/[a-z]{2}"), config.front() + '/' + target) + '?' + searchParams.toString();
		location.href = newRelativePathQuery;
	}
	return <>
		<div className="header header-light head-shadow">
			<div className="container">
				<nav id="navigation" className="navigation navigation-landscape">
					<div className="nav-header">
						<a className="nav-brand" href="/en">
							<img src={assetsPath + "/img/logo.png"} className="logo" alt="" />
						</a>
						<div className="nav-toggle"></div>
						<div className="mobile_nav">
							<ul>
								<li>
									<a href="javascript:void(0);" data-toggle="modal" data-target="#login" className="crs_yuo12 w-auto text-white theme-bg">
										<span className="embos_45"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="nav-menus-wrapper">
						<ul className="nav-menu">

							<li><Link href="/en">Home</Link></li>
							<li><Link href="/en/courses">Courses</Link></li>
							<li><Link href="/en/events">Events</Link></li>
							<li><Link href="/en/mentorship">Mentorship</Link></li>
							<li><Link href="https://forum.afg-womens-academy.org/index.php">Forum</Link></li>
							<li><Link href="/en/blogs">Blog</Link></li>
							<li><Link href="/en/about-us">About Us</Link></li>
							<li><Link href="/en/contact-us">Contact Us</Link></li>

						</ul>

						<ul className="nav-menu nav-menu-social align-to-right">

							
						{
							!user ? <>
								<ul className="nav-menu nav-menu-social align-to-right">
									<li>
										<Link href={'/' + local + '/login'} className="alio_green" data-toggle="modal" data-target="#login">
											<i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Sign In</span>
										</Link>
									</li>
									<li className="add-listing theme-bg">
										<Link href={'/' + local + '/register'} className="text-white">Get Started</Link>
									</li>
								</ul>
							</>
								: <>
									<ul className="nav-menu nav-menu-social mt-3 align-to-right">
																				<div class="dropdown show">
											<a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<Img src={'/users/' + user?.pic} defaultSrc='/users/1.jpg' alt="avatar" width="50px" style={{ borderRadius: '50%' }} />
											</a>
											<div class="drp-select dropdown-menu">
												<span className="dropdown-item" >
													<Link href={`/profile/${local}/dashboard`}>Profile</Link>
													{/* <Link href={`/profile/dashboard`}>profile</Link> */}
												</span>
												<span className="dropdown-item" >
													<Link class="dropdown-item" href='javascript:void(0)' onClick={logout}>Sign out</Link>
												</span>
											</div>
										</div>
									</ul>
								</>
						}
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</>
}