import { Breadcrumb } from "./Breadcrumb";

export const Pages = ({children,className , bcreadcrumbClass}) => {
	return <>
	<Breadcrumb className={bcreadcrumbClass}/>
    <section className={className ? className : 'min'}>
		<div className="container">
			{children}
		</div>
	</section>
    </>
}