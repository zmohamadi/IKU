"use client"

import { CheckBox } from "@/Theme/Site/Forms/Checkbox"
import { Select } from "@/Theme/Site/Forms/Select"
import ShowFilter from "@/Theme/Site/Utils/ShowFilter"
import useFilter from "@/Theme/Site/Utils/useFilter"
import { useLang } from "@/lib"
import { useSearchParams } from "next/navigation"

export default function Side({ filters, local, search_place_holder = 'Search your event ...' }) {
	const { Lang } = useLang()
	const { simple, multi_checked, apply_filter } = useFilter()
	const searchParams = useSearchParams()

	const filter_init = (field) => {
		var filter = filters[field];
		var options = filter.options;

		switch (filter?.type) {
			case 'select':
				return <Select
					disabled_option_text={!filter.show_key && filter.query_label}
					onChange={(event) => { simple(field, event.target.value) }}
				>
					{options?.map((c) => {
						return <>
							<option value={c.id}>
								{c[filter.label]} {c[filter.second_label] ?? ''}
							</option>
						</>

					})}
				</Select>

			case 'checkbox':
				return <ul className="no-ul-list mb-3">
					{options?.map((item, index) => {
						return <>
							<li>
								{/* <CheckBox
									key={Math.random()}
									id={filter.query_label + "_" + index}
									containerClassName="col-12 pl-0"
									label={item["title_" + local]}
									defaultValue={searchParams?.get(filter.query_label) == item.id ? item.id : ''}
									value={item.id}
									onChange={(event) => { multi_checked(filter.query_label, event.target.value) }}
								/> */}
								<input
									key={Math.random()}
									id={field + "_" + index}
									className="checkbox-custom"
									checked={searchParams?.get(field)?.includes(item.id) ? true : false}
									onChange={(event) => { multi_checked(field, event.target.value) }}
									type="checkbox" value={item.id} />
								<label for={field + "_" + index} className="checkbox-custom-label">{item["title_" + local]}</label>
							</li>
						</>
					})}
				</ul>

			case 'radio':
				return <ul className="no-ul-list mb-3">
					{options?.map((item, index) => {
						return <>
							<li>
								{/* <CheckBox
									key={Math.random()}
									id={filter.query_label + "_" + index}
									containerClassName="col-12 pl-0"
									label={item["title_" + local]}
									defaultValue={searchParams?.get(filter.query_label) == item.id ? item.id : ''}
									value={item.id}
									onChange={(event) => { multi_checked(filter.query_label, event.target.value) }}
								/> */}
								<input
									key={Math.random()}
									id={field + "_" + index}
									className="checkbox-custom"
									name="field"
									checked={searchParams?.get(field)?.includes(item.id) ? true : false}
									onChange={(event) => { simple(field, event.target.value) }}
									type="radio" value={item.id} />
								<label for={field + "_" + index} className="checkbox-custom-label">{item["title_" + local]}</label>
							</li>
						</>
					})}
				</ul>

			default:
				break;
		}
	}

	return <>
		<div className="page-sidebar p-0">
			<a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2"></i></a>
			<div className="collapse" id="fltbox">
				<div className="sidebar-widgets p-4">

					<div className="form-group">
						<div className="input-with-icon">
							<input id="search" type="text" className="form-control" placeholder={search_place_holder}
								onKeyUp={(event) => { simple('search', event.target.value) }}
								value={searchParams?.get('search')}
							/>
							<i className="ti-search"></i>
						</div>
					</div>
					<ShowFilter key={Math.random()} filters={filters} />
					{
						Object.keys(filters)?.map((filter) => {

							return <div className="form-group">
								{
									filters[filter]?.show_key && <h6 className="sidebar-title mt-4 mb-1">{filter}</h6>
								}
								{filter_init(filter)}
							</div>
						})
					}

					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 pt-4">
							<button className="btn theme-bg rounded full-width" onClick={() => apply_filter()}>Apply Filter</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	</>
}