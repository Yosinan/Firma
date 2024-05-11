import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleTheme, toggleSidebar } from '../../store/themeConfigSlice';

import logo from "../../assets/images/logo.svg";
import user1 from "../../assets/images/user_1.jpg"
import user2 from "../../assets/images/user_2.jpg"
import user3 from "../../assets/images/user_3.jpg"
import user4 from "../../assets/images/user_4.jpg"

import Dropdown from '../Dropdown';
import IconMenu from '../Icon/IconMenu';
import IconSearch from '../Icon/IconSearch';
import IconXCircle from '../Icon/IconXCircle';
import IconSun from '../Icon/IconSun';
import IconMoon from '../Icon/IconMoon';
import IconLaptop from '../Icon/IconLaptop';
import IconInfoCircle from '../Icon/IconInfoCircle';
import IconBellBing from '../Icon/IconBellBing';
import IconUser from '../Icon/IconUser';
import IconMail from '../Icon/IconMail';
import IconLockDots from '../Icon/IconLockDots';
import IconLogout from '../Icon/IconLogout';

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul = selector.closest('ul.sub-menu');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const themeConfig = useSelector((state) => state.themeConfig);
    const dispatch = useDispatch();

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: user1,
            message: '<strong className="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: user2,
            message: '<strong className="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: user3,
            message: '<strong className="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]);

    const removeNotification = (value) => {
        setNotifications(notifications.filter((user) => user.id !== value));
    };

    const [search, setSearch] = useState(false);

    return (
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                        <Link to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline" src={logo} alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">VRISTO</span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            onClick={() => {
                                dispatch(toggleSidebar());
                            }}
                        >
                            <IconMenu className="w-5 h-5" />
                        </button>
                    </div>

                    
                    <div className=" sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                            <form
                                className={`${search && '!block'} sm:relative  absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                                onSubmit={() => setSearch(false)}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
                                        placeholder="Search..."
                                    />
                                    <button type="button" className="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary">
                                        <IconSearch className="mx-auto" />
                                    </button>
                                    <button type="button" className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2" onClick={() => setSearch(false)}>
                                        <IconXCircle />
                                    </button>
                                </div>
                            </form>
                            <button
                                type="button"
                                onClick={() => setSearch(!search)}
                                className="search_btn sm:hidden p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            >
                                <IconSearch className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]" />
                            </button>
                        </div>
                        <div>
                            {themeConfig.theme === 'light' ? (
                                <button
                                    className={`${
                                        themeConfig.theme === 'light' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => {
                                        dispatch(toggleTheme('dark'));
                                    }}
                                >
                                    <IconSun />
                                </button>
                            ) : (
                                ''
                            )}
                            {themeConfig.theme === 'dark' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'dark' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => {
                                        dispatch(toggleTheme('system'));
                                    }}
                                >
                                    <IconMoon />
                                </button>
                            )}
                            {themeConfig.theme === 'system' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'system' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => {
                                        dispatch(toggleTheme('light'));
                                    }}
                                >
                                    <IconLaptop />
                                </button>
                            )}
                        </div>
                        
                        <div className="dropdown shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                button={
                                    <span>
                                        <IconBellBing />
                                        <span className="flex absolute w-3 h-3 ltr:right-0 rtl:left-0 top-0">
                                            <span className="animate-ping absolute ltr:-left-[3px] rtl:-right-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
                                        </span>
                                    </span>
                                }
                            >
                                <ul className="!py-0 text-dark dark:text-white-dark w-[300px] sm:w-[350px] divide-y dark:divide-white/10">
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center px-4 py-2 justify-between font-semibold">
                                            <h4 className="text-lg">Notification</h4>
                                            {notifications.length ? <span className="badge bg-primary/80">{notifications.length}New</span> : ''}
                                        </div>
                                    </li>
                                    {notifications.length > 0 ? (
                                        <>
                                            {notifications.map((notification) => {
                                                return (
                                                    <li key={notification.id} className="dark:text-white-light/90" onClick={(e) => e.stopPropagation()}>
                                                        <div className="group flex items-center px-4 py-2">
                                                            <div className="grid place-content-center rounded">
                                                                <div className="w-12 h-12 relative">
                                                                    <img className="w-12 h-12 rounded-full object-cover" alt="profile" src={notification.profile} />
                                                                    <span className="bg-success w-2 h-2 rounded-full block absolute right-[6px] bottom-0"></span>
                                                                </div>
                                                            </div>
                                                            <div className="ltr:pl-3 rtl:pr-3 flex flex-auto">
                                                                <div className="ltr:pr-3 rtl:pl-3">
                                                                    <h6
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: notification.message,
                                                                        }}
                                                                    ></h6>
                                                                    <span className="text-xs block font-normal dark:text-gray-500">{notification.time}</span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="ltr:ml-auto rtl:mr-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
                                                                    onClick={() => removeNotification(notification.id)}
                                                                >
                                                                    <IconXCircle />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                            <li>
                                                <div className="p-4">
                                                    <button className="btn btn-primary block w-full btn-small">Read All Notifications</button>
                                                </div>
                                            </li>
                                        </>
                                    ) : (
                                        <li onClick={(e) => e.stopPropagation()}>
                                            <button type="button" className="!grid place-content-center hover:!bg-transparent text-lg min-h-[200px]">
                                                <div className="mx-auto ring-4 ring-primary/30 rounded-full mb-4 text-primary">
                                                    <IconInfoCircle fill={true} className="w-10 h-10" />
                                                </div>
                                                No data available.
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                        <div className="dropdown shrink-0 flex">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative group block"
                                button={<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src={user2} alt="userProfile" />}
                            >
                                <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                                    <li>
                                        <div className="flex items-center px-4 py-4">
                                            <img className="rounded-md w-10 h-10 object-cover" src={user2} alt="userProfile" />
                                            <div className="ltr:pl-4 rtl:pr-4 truncate">
                                                <h4 className="text-base">
                                                    Joey Z
                                                    <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">Pro</span>
                                                </h4>
                                                <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                                    johndoe@gmail.com
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/users/profile" className="dark:hover:text-white">
                                            <IconUser className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/apps/mailbox" className="dark:hover:text-white">
                                            <IconMail className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                                            Inbox
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/auth/boxed-lockscreen" className="dark:hover:text-white">
                                            <IconLockDots className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                                            Lock Screen
                                        </Link>
                                    </li>
                                    <li className="border-t border-white-light dark:border-white-light/10">
                                        <Link to="/auth/boxed-signin" className="text-danger !py-3">
                                            <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
