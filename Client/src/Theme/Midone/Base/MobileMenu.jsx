'use client'

import { useLang } from '@/lib';
import {useConfig} from '@/lib/config';
import {icons} from '@/lib/icons';
import Link from 'next/link';
import * as Icon from 'react-feather';

export function MobileMenu({prefix, menus}){
    const {nextDomain, laraDomain} = useConfig();
    const {dir, Lang} = useLang();
    return (
        <div className='mobile-menu md:hidden'>
            <div className='mobile-menu-bar'>
                <a href='' className={'flex '+(dir == "ltr"?"mr-auto":"ml-auto")}>
                    <img alt='Icewall Tailwind HTML Admin Template' width="75px" className='w-64' src={laraDomain+'/media/logo/light-logo.png'} />
                    <span className='text-white text-lg mr-3 adjust '><b>  </b></span>
                </a>
                <a href='#' id='mobile-menu-toggler'> 
                    {/* <i dataFeather='bar-chart-2' className='w-8 h-8 text-white transform-rotate-90'></i> */}
                    <Icon.BarChart2 color='#FFF' />
                </a>
            </div>
            <ul className='border-t border-theme-2 py-5 hidden'>
                {
                    menus.map((item, index)=>{
                        let ICN = Icon[item.icon];
                        if(item.childs?.length > 0)
                            return (<li key={index}>
                                        <a href='#' className={item.open?'menu menu--open': 'menu'}>
                                            <div className='menu__icon'>
                                                <ICN className="px-auto inline" size='18' />
                                            </div>
                                            <div className='menu__title'>
                                                {Lang('public.'+item.title)}
                                                <div className='side-menu__sub-icon transform rotate-180'>
                                                    <Icon.ChevronUp size='16' style={{margin: '10px'}} />
                                                </div>
                                            </div>
                                        </a>
                                        <ul className={item.open?'menu__sub-open': ''}>
                                            {item.childs.map((child, index)=>{
                                                let CICN = Icon[child.icon];
                                                return <li key={index}>
                                                    <Link href={nextDomain+prefix+child.href} className='menu'>
                                                        <div className='menu__icon'>
                                                            <CICN className="px-auto inline" size='16' />
                                                        </div>
                                                        <div className='menu__title'> 
                                                            {Lang('public.'+child.title)}
                                                        </div>
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                    </li>);
                        else{
                            return <li key={index}>
                                        <Link href={nextDomain+prefix+item.href} className='menu menu--active'>
                                            <div className='menu__icon'>  <ICN className="px-auto inline" size='18' /> </div>
                                            <div className='menu__title'> {Lang('public.'+item.title)} </div>
                                        </Link>
                                    </li>
                        }
                    })
                }
            </ul>
        </div>
    );
}