import { config, useLang } from "@/lib"

export const Google = ({ text, ...props }) => {

    const { Lang, locale } = useLang();

    const warning = () => {
        $('select').parent().parent().css({
            transform: 'scale(1.02)',
            border: '1px solid red',
            borderRadius: '5px',
            transition: '.3s ease-in-out'
        })

        setTimeout(() => {
            $('select').parent().parent().css({
                transform: 'scale(1)',
                border: 'unset',
                position: 'static',
                transition: '.3s ease-in-out'
            })
        }, 1000);
    }


    if (props.disabled) {
        return <>
            <div className="rcs_log_125">
                <span>{text}</span>
            </div>
            <div className="rcs_log_126" onClick={() => warning()}>
                <div className="form-group">
                    <button type="button" className="btn full-width btn-md bg-info text-white">
                        <i className="ti-google text-danger"></i> {Lang('public.google')}
                    </button>
                </div>
            </div>
        </>
    }

    return <>
        <div className="rcs_log_125">
            <span>{text}</span>
        </div>
        <a href={config.host() + '/' + locale + `/login/google?${props.level_id ? `level_id=${props.level_id}&timezone_id=${props.timezone_id}&is_mentee=${props.is_mentee}&gender_id=${props.gender_id} ` : ''}`} type="button">
            <div className="rcs_log_126">
                <div className="form-group">
                    <button type="button" className="btn full-width btn-md bg-info text-white">
                        <i className="ti-google text-danger"></i> {Lang('public.google')}
                    </button>
                </div>
            </div>
        </a>
    </>
}