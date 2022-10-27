import React, { useEffect } from "react";
import {webUI, floatUI, focusUI} from '../res/js/common';

const Main = () => {
    return (
      <>
        <div className={"main"}>
            <div className={"vod_wra fix"}>
                <div className={"player_wrap"}>
                    <div className="main_video">
                        {/*<video id="video1" width="100%" height="100%">*/}
                        {/*    <source src="mov_bbb.mp4" type="video/mp4">*/}
                        {/*</video>*/}
                        <button className={"btn_basic usetap"} type="button" data-focus={"3-1"} onKeyDown={focusUI.doFocus}>><span
                            className={"btn_txt"}>지금 바로 참여하기</span></button>
                    </div>
                </div>
                <div className={"detail_wrap"}>
                    <div className={"count"}>25만명 시청중</div>
                    <div className={"title"}>손석구가 직접 알려주는 유독 ✨</div>
                    <div className={"summary"}>실시간 퀴즈에 참여하면 유독 할인쿠폰과 함께 손석구의 친필 싸인까지 받을 수 있습니다! 어서 유독하러 오기~</div>
                    <div className={"flex_from"}>
                        <button className={"btn_basic usetap"} type="button" data-focus={"4-1"} onKeyDown={focusUI.doFocus}>><span
                            className={"btn_txt"}>지금 바로 참여하기</span></button>
                    </div>
                </div>
            </div>

            <div className={"list_wrap"}>
                <div className={"list_type_1"}>
                    <h3>민정님을 위한 오늘의 식단 레시피 🥗</h3>
                    <ul>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"5-1"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"5-2"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"5-3"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"5-4"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"5-5"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={"list_type_1"}>
                    <h3>민정님을 위한 오늘의 식단 레시피 🥗</h3>
                    <ul>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"6-1"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락리프레시 후 정성과 열정을 가득 담은
                                        도시락🔥
                                    </div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"6-2"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"6-3"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"6-4"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"6-5"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={"list_type_1"}>
                    <h3>민정님을 위한 오늘의 식단 레시피 🥗</h3>
                    <ul>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"7-1"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락리프레시 후 정성과 열정을 가득 담은
                                        도시락🔥
                                    </div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"7-2"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"7-3"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"7-4"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"7-5"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={"list_type_1"}>
                    <h3>민정님을 위한 오늘의 식단 레시피 🥗</h3>
                    <ul>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"8-1"} onKeyDown={focusUI.doFocus}>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락리프레시 후 정성과 열정을 가득 담은
                                        도시락🔥
                                    </div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"8-2"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"8-3"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"8-4"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"usetap"} data-focus={"8-5"} onKeyDown={focusUI.doFocus}>>
                                <div className={"thumb"}>
                                    <img src={process.env.PUBLIC_URL + '/images/s_image_01.png'} alt=""/>
                                    <div className={"time"}>13분 10초</div>
                                </div>
                                <div className={"detail"}>
                                    <div className={"date"}>2022.102.22</div>
                                    <div className={"title"}>휴가 후유증도 날려버릴, 리프레시 후 정성과 열정을 가득 담은 도시락🔥</div>
                                    <div className={"count"}>조회수 35만회</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        
      </>
    )
  }
  
  export default Main