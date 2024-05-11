import { useConfig } from "@/lib/config";
import CourseCard from "../Cards/CourseCard";
import Link from "next/link";

const {assetsPath } = useConfig();

export const Cources = ({data,local,text}) => {
	// console.log(params);
	const formUrl = "/courses";
    const media = "/course/";
    // const local = lang

    return <>
       <section>
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
                    data?.map((course) => {
                        return <>
                            <CourseCard page="home" item={course} formUrl={formUrl} media={media} />
                        </>
                    })
                	}
						
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8 mt-2">
							<div className="text-center">
								<Link href="/en/courses" className="btn btn-md theme-bg-light theme-cl">
								Explore More Cources
								</Link>
								</div>
						</div>
					</div>
					
				</div>
			</section>
    </>
}