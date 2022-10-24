import { webUI, navUi } from '../res/js/common';

import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        navUi.initMainNav("mainNav");
    }, []);
    return (
        <>
            <header className={"fixed_header_wrap"}>
                <div className={"fixed_header"}>
                    <h1><a href="#" className="logo" aria-label="U+미디어Studio"></a></h1>
                    <ul className={"user_info"}>
                        <li>
                            <a href="#" className={"ic_mypage usetap"} aria-label="마이페이지"></a>
                        </li>
                        <li>
                            <a href="#" className={"ic_search usetap"} aria-label="검색"></a>
                        </li>
                        <li>
                            <a href="#" className={"ic_alarm usetap"} aria-label="알람"></a>
                        </li>
                        <li>
                            <a href="#" className={"ic_setting usetap"} aria-label="설정"></a>
                        </li>
                    </ul>
                </div>
            </header>
            <nav className={"tab_menu_wrap"} id={"mainNav"}>
                <div className={"menu_wrap"}>
                    <ul>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_02.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_03.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_04.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_05.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_06.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_07.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_08.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_09.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_02.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_03.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                        <li className={"tab_link"}>
                            <a href="#" className={"usetap"}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/menutree_01.png'}/>
                                </div>
                                <div className={"title"}>뚜뚜상점</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
  }
  
  export default Header