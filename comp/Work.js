import hmbrc1 from '../img/hmbrc11.png'
import hmbrc2 from '../img/hmbrc22.png'
import hmbrc3 from '../img/hmbrc33.png'
import hong1 from '../img/hong11.png'
import hong2 from '../img/hong22.png'
import hong3 from '../img/hong33.png'
import kyobo1 from '../img/kyobo11.png'
import kyobo2 from '../img/kyobo22.png'
import kyobo3 from '../img/kyobo33.png'
import mbti1 from '../img/mbti1.png'
import mbti2 from '../img/mbti2.png'
import mbti3 from '../img/mbti3.png'
import work from "../data/work.json";
import portfolio from "../data/portfolio.json";
import React, {useRef } from 'react';
import home from '../img/home.png'
import next from '../img/next.png'
import prev from '../img/prev.png'
import close from '../img/close.png'

export default function Work(){


    const workListRef = useRef([]);
    const workSrc1Ref = useRef([]);
    const workSrc2Ref = useRef([]);
    const workSrc3Ref = useRef([]);
    

    const MouseImg = (e) =>{
        const active_Num = e.target.dataset.num;
        const Src1 = workSrc1Ref.current;
        const Src2 = workSrc2Ref.current;
        const Src3 = workSrc3Ref.current;
        
        for(let i=0; i<Src1.length;i++){
            Src1[i].classList.remove('show');
            Src2[i].classList.remove('show');
            Src3[i].classList.remove('show');
        }
        Src1[active_Num].classList.add('show');
        Src2[active_Num].classList.add('show');
        Src3[active_Num].classList.add('show');

    }

    window.addEventListener('scroll',scrollW);
    // window.removeEventListener('scroll',scrollW);
    function scrollW(){
        const elPor = document.querySelectorAll('.scrY');
        let porScrollY = elPor[0].offsetParent.offsetTop - window.innerHeight <= window.scrollY;
        elPor.forEach((k)=>{
            if(porScrollY){
                k.classList.add('active');
            }else{
                k.classList.remove('active');
            };
        });

        //work list/ img 위로 등장
        const workList = document.querySelector('.work-list');
        const workImg = document.querySelectorAll('.work-img');

        let workListY = (workList.offsetParent.offsetTop + workList.offsetTop) - window.innerHeight <= window.scrollY;
        if(workListY){
            workList.classList.add('show');
            for(let i=0;i<workImg.length;i++){
                workImg[i].classList.add('show');
            }
        }else{
            workList.classList.remove('show');
            for(let i=0;i<workImg.length;i++){
                workImg[i].classList.remove('show');
            }
        }

    }

    const popupRef = useRef([]);
    const CupopupRef = popupRef.current;
    const popupCl = (e) => {
        const active_Num = e.target.dataset.num;
        for(let i=0;i<CupopupRef.length;i++){
            CupopupRef[i].classList.remove('active');
        }
        CupopupRef[active_Num].classList.add('active');
    }

    const nextClick = (e) => {
        const active_Num = e.target.dataset.num;
        let next_Num = Number(active_Num) + 1;
        if(active_Num == 3 ){next_Num = 0}

        CupopupRef[next_Num].classList.add('active');
        CupopupRef[active_Num].classList.remove('active');
    }

    const prevClick = (e) => {
        const active_Num = e.target.dataset.num;
        let prev_Num = Number(active_Num) - 1;
        if(active_Num == 0 ){prev_Num = 3}

        CupopupRef[prev_Num].classList.add('active');
        CupopupRef[active_Num].classList.remove('active');
    }

    const popupClose = (e) => {
        const work = document.querySelector(".work-list").offsetParent.offsetTop + document.querySelector(".work-list").offsetTop -100 ;
        const active_Num = e.target.dataset.num;
        CupopupRef[active_Num].classList.remove('active');
        window.scrollTo({ top: work, behavior: "smooth" });
    }

    const popupHome = () => {     
        window.location.reload();
    }

    const openWindow = () => {
        window.open(
            'https://hannah3406.github.io/KyoboBook/storynew.html','_blank',"location=1,toolbar=1,menubar=1,resizable=1,width=375,height=640,top=360, left=350"
            );
        return false;
    }
return(
<section className="Work" id="Work">
    <div className="subtit tit2 eng"><span>selected work</span></div>
    <div className="subNum Num2"><span>02</span></div>
    <div className="big-tit por scrY">
        <span className="text-left"><span className="eng">p</span></span>
        <span className="text-left"><span className="eng">o</span></span>
        <span className="text-left"><span className="eng">r</span></span>
    </div>
    <div className="big-tit tfo scrY">
        <span className="text-left"><span className="eng">t</span></span>
        <span className="text-left"><span className="eng">f</span></span>
        <span className="text-left"><span className="eng">o</span></span>
    </div>
    <div className="big-tit lio scrY">
        <span className="text-left"><span className="eng">l</span></span>
        <span className="text-left"><span className="eng">i</span></span>
        <span className="text-left"><span className="eng">o</span></span>
    </div>
    <ul className="work-list">
        {
            work.map(function(dataView,i){
                return(
                    <li onMouseOver={ (e) => { MouseImg(e) }  } data-num={i} key={i}>
                        <span data-num={i} ref={elem => (workListRef.current[i] = elem)} onMouseOver={ (e) => { MouseImg(e) } } onClick={ (e) => { popupCl(e) } }>
                            <small onMouseOver={ (e) => { MouseImg(e) } } data-num={i}>{dataView['num']}</small>
                            {dataView['tit']}
                        </span>
                    </li>
                )
            })
        }
    </ul>
    <div className="work-img work-img1">
        <ul className="work-inner">
            <li className="show"  data-num={0} ref={elem => (workSrc1Ref.current[0] = elem)} ><img src={hmbrc1} alt="img1"/></li>
            <li data-num={1} ref={elem => (workSrc1Ref.current[1] = elem)} ><img src={hong1} alt="img1"/></li>
            <li data-num={2} ref={elem => (workSrc1Ref.current[2] = elem)}><img src={kyobo1}  alt="img1"/></li>
            <li data-num={3} ref={elem => (workSrc1Ref.current[3] = elem)}><img  src={mbti1} alt="img1"/></li>
        </ul>
    </div>
    <div className="work-img work-img2">
        <ul className="work-inner">
            <li className="show"  data-num={0}  ref={elem => (workSrc2Ref.current[0] = elem)}><img src={hmbrc2} alt="img1"/></li>
            <li data-num={1}  ref={elem => (workSrc2Ref.current[1] = elem)}><img src={hong2} alt="img1"/></li>
            <li data-num={2}  ref={elem => (workSrc2Ref.current[2] = elem)}><img src={kyobo2} alt="img1"/></li>
            <li data-num={3} ref={elem => (workSrc2Ref.current[3] = elem)}><img src={mbti2}  alt="img1"/></li>
        </ul>
    </div>
    <div className="work-img work-img3">
        <ul className="work-inner">
            <li className="show" data-num={0} ref={elem => (workSrc3Ref.current[0] = elem)}><img src={hmbrc3}  alt="img1"/></li>
            <li data-num={1}  ref={elem => (workSrc3Ref.current[1] = elem)}><img src={hong3} alt="img1"/></li>
            <li data-num={2} ref={elem => (workSrc3Ref.current[2] = elem)}><img src={kyobo3}  alt="img1"/></li>
            <li data-num={3} ref={elem => (workSrc3Ref.current[3] = elem)}><img  src={mbti3}  alt="img1"/></li>
        </ul>
    </div>
    <div className="popup-box">
    {
            portfolio.map(function(dataView,i){
                return(
                    <div className="detail-popup" data-num={i} ref={elem => (popupRef.current[i] = elem)} key={i}>
                        <div className="popup-content">
                            <ul className="icon">
                                <li data-num={i} onClick={ (e) => { prevClick(e) } }><img src={prev} onClick={ (e) => { prevClick(e) } } data-num={i} alt="home"/></li>
                                <li data-num={i} onClick={ (e) => { nextClick(e) } }><img src={next}  onClick={ (e) => { nextClick(e) } } data-num={i} alt="home"/></li>
                                <li data-num={i} onClick={ popupHome }><img src={home} data-num={i} onClick={ (e) => { popupHome(e) } } alt="home"/></li>
                                <li data-num={i} onClick={ (e) => { popupClose(e) } }><img onClick={ (e) => { popupClose(e) } } data-num={i} src={close} alt="home" /></li>
                            </ul>
                            <div className="popup-tit">
                                <h2 className="eng">{dataView['tit']}</h2>
                                <p>
                                    <strong className="eng">{dataView['engtit']}</strong>
                                    {dataView['kotit']}
                                </p>
                            </div>
                            <div className="popup-page">
                                <div className="popup-txt-all">
                                    <ul>
                                        <li className="popup-img">
                                            <figure>
                                                <img className="imgScreen" src={dataView['screenImg']} alt="img2"/>
                                                <img className="imgFrame" src={dataView['deviceImg']} alt="img2"/>
                                            </figure>
                                        </li>
                                        <li className="popup-txt popup-txt1">
                                            <p><strong>프로젝트 개요</strong></p>
                                            <span className="span">{dataView['engtit']}</span>
                                            <div className="txt-1">
                                                <ul>
                                                    <li><strong className="txt-right">프로젝트 설명 : </strong></li>
                                                    <li><strong className="txt-right">프로젝트 제작기간 : </strong></li>
                                                    <li><strong className="txt-right">프로젝트 유형 : </strong></li>
                                                    <li><strong className="txt-right">프로젝트 참여도 : </strong></li>
                                                </ul>
                                                <ul>
                                                    <li>{dataView['desLi1']}</li>
                                                    <li>{dataView['desLi2']}</li>
                                                    <li>{dataView['desLi3']}</li>
                                                    <li>{dataView['desLi4']}</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="popup-txt popup-txt2">
                                            <p><strong>프로젝트 목표</strong></p>
                                            <p dangerouslySetInnerHTML={ {__html: dataView['description2']} }></p>
                                        </li>
                                        <li className="popup-txt popup-txt3">
                                            <p><strong>작업 포인트</strong></p>
                                            <p dangerouslySetInnerHTML={ {__html: dataView['description3']} }></p>
                                        </li>
                                        <li className="popup-txt popup-txt4">
                                            <p><strong>개발기술</strong></p>
                                            <p dangerouslySetInnerHTML={ {__html: dataView['description4']} }></p>

                                        </li>
                                        <li className="popup-txt popup-a"> <a href={dataView['url']}  target="_blank" onClick={i===2 ? openWindow : ''}>사이트 이동</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            })
    }
    </div>
</section>
)
}
