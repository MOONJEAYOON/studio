import { navUi, focusUI } from '../res/js/common';

import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        navUi.initMainNav(document.getElementById('mainNav'));
    }, []);
    return (
        <>
            <header className={"fixed_header_wrap fix"}>
                <div className={"fixed_header"}>
                    <h1><a href="/" className="logo usetap" aria-label="U+미디어Studio" data-focus={"1-1"} onKeyDown={focusUI.doFocus}></a></h1>
                    <ul className={"user_info"}>
                        <li>
                            <button className={"ic_mypage usetap"} aria-label="마이페이지" data-focus={"2-1"} onKeyDown={focusUI.doFocus}></button>
                        </li>
                        <li>
                            <button className={"ic_search usetap"} aria-label="검색" data-focus={"2-2"} onKeyDown={focusUI.doFocus}></button>
                        </li>
                        <li>
                            <button className={"ic_alarm usetap"} aria-label="알람" data-focus={"2-3"} onKeyDown={focusUI.doFocus}></button>
                        </li>
                        <li>
                            <button className={"ic_setting usetap"} aria-label="설정" data-focus={"2-4"} onKeyDown={focusUI.doFocus}></button>
                        </li>
                    </ul>
                </div>
            </header>
            <nav className={"tab_menu_wrap fix"}>
                <div className={"fix_inner sco_block"}>
                    <div className={"menu_wrap"}>
                        <button type={"button"} className={"ic_arrow_prev usetap"} aria-label="이전메뉴"></button>
                        <button type={"button"} className={"ic_arrow_next on usetap"} aria-label="다음메뉴"></button>
                        <div className={"menu_list_wrap"} id={"mainNav"}>
                            <ul>
                                <li className={"tab_link current"}>
                                    <button className={"usetap"} data-focus={"3-1"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-2"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_02.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-3"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_03.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-4"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_04.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-5"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_05.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-6"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_06.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-7"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_07.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-8"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_08.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-9"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_09.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-10"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-11"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_02.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-12"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_03.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-13"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                                <li className={"tab_link"}>
                                    <button className={"usetap"} data-focus={"3-14"} onKeyDown={focusUI.doFocus}>
                                        <div className={"thumb"}>
                                            <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                        </div>
                                        <div className={"title"}>뚜뚜상점</div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
  }
  
  export default Header