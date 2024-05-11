@php
    if (\App::getLocale() == 'en') {
        $style = 'direction: ltr; text-align: left;';
    } else {
        $style = 'direction: rtl; text-align:right;';
    }
@endphp
<table width="100%" cellspacing="0" cellpadding="0" border="0">
    <!-- LOGO -->
    <tbody>
        <tr>
            <td bgcolor="#ef394e" align="center">
                <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="padding: 40px 10px 40px 10px;" valign="top" align="center"> </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 0px 10px 0px 10px;" bgcolor="#ef394e" align="center">
                <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"
                                valign="top" bgcolor="#ffffff" align="center">
                                <h1 style="font-size: 48px; font-weight: 400; margin: 2; text-align:center">
                                    @lang('Lang::public.welcome')</h1>
                                <img src=" {{ asset('/media/logo/logo-md.png') }}"
                                    style="display: block; border: 0px;" width="200" height="120">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 0px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#ffffff" align="right">
                                <p style="margin: 0;box-sizing: border-box; position: relative; {{ $style }}">
                                    @lang('Lang::public.click_verify')</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="right">
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 20px 30px 60px 30px;" bgcolor="#ffffff" align="center">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border-radius: 3px;" bgcolor="#ef394e"
                                                                align="center">
                                                                <a href="{{ $url }}" target="_blank"
                                                                    style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; 
                                                                        color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; 
                                                                        padding: 15px 25px; border-radius: 2px; border: 1px solid #ef394e; display: inline-block; {{ $style }}">
                                                                    @lang('Lang::public.verify_email')
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr> <!-- COPY -->
                        <tr>
                            <td style="padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#ffffff" align="right">
                                <p style="margin: 0;box-sizing: border-box; position: relative; {{ $style }}">
                                    @lang('Lang::public.dos_not_verify_link')
                                </p>
                            </td>
                        </tr> <!-- COPY -->
                        <tr>
                            <td style="padding: 20px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#ffffff" align="right">
                                <p style="margin: 0; box-sizing: border-box; position: relative; {{ $style }}">
                                    <span
                                        style="color: #EF394E;max-width: 500px;
                                        display: inline-block;
                                        white-space: pre-wrap;
                                        white-space: -moz-pre-wrap;
                                        white-space: -pre-wrap;
                                        white-space: -o-pre-wrap;
                                        word-wrap: break-word;">
                                        {{ $url }}
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#ffffff" align="right">
                                <p style="margin: 0;box-sizing: border-box; position: relative; {{ $style }}">
                                    @lang('Lang::public.email_us')
                                </p>
                            </td>
                        </tr>
                        <tr dir="ltr">
                            <td style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#ffffff" align="right">
                                <p style="margin: 0;">afgwomen@afg-womens-academy.org,<br>IKU Platform Team</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                bgcolor="#FFECD1" align="center">
                                <h2
                                    style="font-size: 20px; font-weight: 400; color: #111111; margin: 0; text-align: center">
                                    @lang('Lang::public.need_more_help')
                                </h2>
                                <p style="margin: 0;text-align: center;">
                                    <a href="https://demo.afg-womens-academy.org" target="_blank">
                                        @lang('Lang::public.we_are_to_help')
                                    </a>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 0px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"
                                bgcolor="#f4f4f4" align="center"> <br>
                                <p style="margin: 0;text-align: center">
                                    @lang('Lang::public.if_you_dont_request_for_signup')
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
