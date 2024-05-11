import BlogCard from "../Cards/BlogCard";

const formUrl = "/blog";
const media = "/blogs";

export const Article = ({data,local,text}) => {
	// console.log(data);
    return <>
        <section className="min">
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
					{
						data?.map((blog) => {
							return <>
								<BlogCard item={blog} formUrl={formUrl} media={media} />
							</>
						})
                	}
					
					</div>
					
				</div>
			</section>
			<div className="clearfix"></div>
    </>
}