import { Notif } from "../../Utils/Notif";

export default function Share({ className = "modal-dialog modal-md", ...props }) {
    const link = window.location.href

    const share = (type) => {
        switch (type) {
            case 'telegram':
                window.open('https://t.me/share/url?url=' + link, '_blank')
                break;
            case 'facebook':
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + link, 'facebook-share-dialog',
                    "width=626", "height=436");
                break;
            case 'twitter':
                window.open('https://www.twitter.com/intent/tweet?url=' + link)
                break
            case 'whatsapp':
                window.open('https://api.whatsapp.com/send?text=' + link, '_blank')
                break;
            case 'copy':
                navigator.clipboard.writeText(link)
                Notif('success', 'Copied to clipboard!')
                break;
            default:
                break;
        }
    }
    return <div className="flex">
        <hr style={{borderColor: '#23a16f'}} />
        <ul class="social_info">
            <li onClick={() => share('facebook')}><span><i class="ti-facebook"></i></span></li>
            <li onClick={() => share('twitter')}><span><i class="ti-twitter"></i></span></li>
            <li onClick={() => share('telegram')}><span><i class="ti-linkedin"></i></span></li>
            {/* <li onClick={() => share('whatsapp')}><span><i class="fa fa-whatsapp"></i></a></spani> */}
            <li onClick={() => share('copy')}><span><i class="fa fa-copy"></i></span></li>
        </ul>
    </div>
    return <div className="modal fade" id={props?.target} tabindex="-1" aria-labelledby={props?.target + "Label"} aria-hidden="true">
        <div className={className}>
            <div className="modal-content">
                <div className="modal-header">
                    {props?.label && <h5 className="modal-title h4" id={props?.target + "Label"}>{props.label}</h5>}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.text && <p>{link}</p>}
                    <ul class="social_info">
                        <li onClick={() => share('facebook')}><a href="#"><i class="ti-facebook"></i></a></li>
                        <li onClick={() => share('twitter')}><a href="#"><i class="ti-twitter"></i></a></li>
                        <li onClick={() => share('telegram')}><a href="#"><i class="ti-linkedin"></i></a></li>
                        <li onClick={() => share('whatsapp')}><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                        <li onClick={() => share('copy')}><a href="#"><i class="fa fa-copy"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}