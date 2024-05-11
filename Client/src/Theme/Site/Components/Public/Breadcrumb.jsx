import { useConfig } from "@/lib/config";

const {assetsPath } = useConfig();

export const Breadcrumb = ({className}) => {
	let page = window.location.pathname.split("/")[2];
	page = page.replace('-', ' ');
	// console.log(page);
    return <>
        <section className={className?className+" page-title":"page-title"}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							
							<div className="breadcrumbs-wrap">
								{/* <h1 className="breadcrumb-title">{page}</h1> */}
								<nav className="transparent">
									<ol className="breadcrumb p-0">
										<li className="breadcrumb-item"><a href="/en">Home</a></li>
										<li className="breadcrumb-item active theme-cl" aria-current="page">{page}</li>
									</ol>
								</nav>
							</div>
							
						</div>
					</div>
				</div>
			</section>
    </>
}