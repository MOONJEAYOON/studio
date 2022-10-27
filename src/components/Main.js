import React, { useEffect } from "react";
import {focusUI, navUi, videoUi} from '../res/js/common';
// import ResponsivePlayer from "./ResponsivePlayer";

const Main = () => {
    useEffect(() => {
        videoUi.init(document.getElementById('vod_player'));
    }, []);

    return (
      <>
        <div className={"main"}>
            <div className={"vod_wra"}>
                <div className={"player_wrap"}>
                    <div className="main_video">
                        {/*<ResponsivePlayer />*/}

                        <div>
                            <div className="player" id={"vod_player"}>
                                <video className="player__video viewer"
                                       width='100%'
                                       height='100%'
                                       src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"></video>
                                <div className="player__controls player__controls--visible">
                                    <div className="progress">
                                        <div className="progress__filled"></div>
                                    </div>
                                    <div className="player__controls-holder">
                                        <button className="player__button togglePlayback" title="Toggle Play"><i
                                            className="player__playbackIcon"></i></button>
                                        <input type="range" name="volume" className="player__slider playerVolume" min="0" max="1" step="0.05" value="1" />
                                    </div>
                                    <div className="player__controls-holder">
                                        <select name="playbackRate" className="player__select playerSpeed">
                                            <option value="0.5">0.5</option>
                                            <option value="0.75">0.75</option>
                                            <option value="1" selected>Normal</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                        </select>
                                        <button className="player__button toggleFullscreen" title="Toggle Play">⛶
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


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
                            <a href="{()=>false}" className={"usetap"} data-focus={"5-1"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"5-2"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"5-3"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"5-4"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"5-5"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"6-1"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"6-2"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"6-3"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"6-4"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"6-5"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"7-1"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"7-2"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"7-3"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"7-4"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"7-5"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"8-1"} onKeyDown={focusUI.doFocus}>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"8-2"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"8-3"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"8-4"} onKeyDown={focusUI.doFocus}>>
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
                            <a href="{()=>false}" className={"usetap"} data-focus={"8-5"} onKeyDown={focusUI.doFocus}>>
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