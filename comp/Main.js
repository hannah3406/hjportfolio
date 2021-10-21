import myImg from '../img/img-personal3.png';
import myImg1 from '../img/img-personal31.png';

import home from '../img/home.png'
import close from '../img/close.png'

import AboutTxt from "./AboutTxt";
import AboutInfo from "./AboutInfo";

import work from "../data/work.json";
import Work from "./Work";
import Contact from "./Contact";
import React, { useState, useEffect, useRef } from 'react';

export default function Main(){
    const [boll, setBoll] = useState(false);
    const [tit, setTit] = useState(false);
    const [Allpro, setAllpro] = useState(false);


//로딩
setTimeout(closeLoadingWithMask, 2000);
    function closeLoadingWithMask() {
        setBoll(true);
        setTit(true);
        if(window.scrollY === 0){
            window.scrollTo({ top: 100, behavior: "smooth" });
        }
}

//새로고침
useEffect(() => {
    if(window.scrollY !== 0){
        window.scrollTo({ top: 100, behavior: "smooth" });
    }
}, [boll]);

    
    const handleScroll = (e) => {
        const about = document.querySelector(".tit1").offsetParent.offsetTop-100;
        const work = document.querySelector(".tit2").offsetParent.offsetTop-100;
        const contact = document.querySelector(".tit3").offsetParent.offsetTop-100;
        //네비 버튼 클릭시 해당 위치로 scroll 위치 이동
        const target = e.target.innerText;

        if (target === "ABOUT") {
            window.scrollTo({ top: about, behavior: "smooth" });
        } else if (target === "WORK") {
            window.scrollTo({ top: work, behavior: "smooth" });
        } else if (target === "CONTACT") {
            window.scrollTo({ top: contact, behavior: "smooth" });
        }
    };
    //AllProject
    function allProject(){
        setAllpro(true);
    }

    const LiRef = useRef([]);
    const NumRef = useRef([]);
    const ImgRef = useRef([]);
    const MouseRef = useRef(null);

    // function Movemouse(e) {
    //         let mouseX =e.pageX -20;
    //         let mouseY = e.pageY - 320;

    //         let MouseShape = MouseRef.current;
    //         MouseShape.style.top = `${mouseY}px`;
    //         MouseShape.style.left = `${mouseX}px`;
    //         console.log(mouseY);
    // }
    
    // useEffect(()=> {
    //     window.addEventListener('mousemove',Movemouse)

    //     return () => {
    //         window.removeEventListener('mousemove',Movemouse)
    //     }
    // })

    const MouseNum = (e) =>{
        const active_Num = e.target.dataset.num;
        const elNum = NumRef.current;
        const elLi = LiRef.current;
        const elImg = ImgRef.current;
        
        for(let i=0; i<elNum.length;i++){
            elNum[i].classList.remove('active');
            elLi[i].classList.remove('active');
            elImg[i].classList.remove('active');
        }
        elNum[active_Num].classList.add('active');
        elLi[active_Num].classList.add('active');
        elImg[active_Num].classList.add('active');
    }



    function logo(){
        window.location.reload();
    }

    window.addEventListener('scroll',scrollM);
    // window.removeEventListener('scroll',scrollM);

    function scrollM(){
    //이미지 등장
    const myImg = document.querySelector('.info-myimg');
    let myImgHeight = myImg.offsetParent.offsetTop;
    let myImgH = myImgHeight - window.innerHeight <= window.scrollY;
    if(myImgH){
        myImg.classList.add('active');
    }else{
        myImg.classList.remove('active');
    }

    //subtit 등장
    const subTit = document.querySelectorAll('.subtit');
    subTit.forEach((k)=>{
        let titScrollY = k.offsetParent.offsetTop - window.innerHeight <= window.scrollY;
        if(titScrollY){
            k.classList.add('active');
        }else{
            k.classList.remove('active');
        };
    });

    //suvNum 등장
    const subNum = document.querySelectorAll('.subNum');
    subNum.forEach((k)=>{
        let numScrollY = k.offsetParent.offsetTop - window.innerHeight <= window.scrollY;
        if(numScrollY){
            k.classList.add('active');
        }else{
            k.classList.remove('active');
        };
    });
    }

    const popupClose = () => {
        setAllpro(false);
    }

    const popupHome = () => {     
        window.location.reload();
    }



    const popupCl = (e) => {
        const active_Num = e.target.dataset.num;
        const elPopup = document.querySelectorAll(".detail-popup")
        
        elPopup[active_Num].classList.add('active');
    }
    
    return(
        <div className="App">
            <div className={boll ? "on" : ""} id="Loading">
                <div id="Loading-text" className={tit ? "on" : ""}>
                    <span className="show text1">H</span>
                    <span className="hide text2">a</span>
                    <span className="hide text3">j</span>
                    <span className="hide text4">u</span>
                    <span className="hide text5">n</span>
                    <span className="hide text6">g</span>
                    <span className="hide text7">'</span>
                    <span className="hide text8">s</span>
                    <span className="show text9">P</span>
                    <span className="hide text10">o</span>
                    <span className="hide text11">r</span>
                    <span className="hide text12">t</span>
                    <span className="hide text13">f</span>
                    <span className="hide text14">o</span>
                    <span className="hide text15">l</span>
                    <span className="hide text16">i</span>
                    <span className="hide text17">o</span>
                </div>
            </div>
            <div id="all-project" className={Allpro ? "active" : ""}>
                <ul>
                {
                    work.map(function(dataView,i){
                        return(
                            <li data-num={i} key={i}  onMouseOver={ (e) => { MouseNum(e) }  } onClick={ (e) => { popupCl(e) } } >
                                <span data-num={i} onMouseOver={ (e) => { MouseNum(e) }  } onClick={ (e) => { popupCl(e) } } className={i===0 ? "active" : ""} ref={elem => (LiRef.current[i] = elem)}  >
                                    {dataView['tit']}
                                </span>
                            </li>
                        )
                    })
                }
                </ul>
                {
                    work.map(function(dataView,i){
                        return(
                            <span data-num={i} key={i} className={i===0 ? "active" : ""} ref={elem => (NumRef.current[i] = elem)} >
                                <span data-num={i}>
                                    {dataView['num']}
                                </span>
                            </span>
                        )
                    })
                }
                <div className="all-project-img">
                    <figure>
                    {
                        work.map(function(dataView,i){
                            return(
                                <img data-num={i} className={i==0 ? "active" : ""} ref={elem => (ImgRef.current[i] = elem)} src={dataView['src']} key={i} alt="img"/>
                            )
                        })
                    }
                    </figure>
                </div> 
                <ul className="all-project-opt">
                    <li onClick={ popupHome }><img src={home} onClick={ popupHome } alt="home"/></li>
                    <li onClick={ popupClose}><img onClick= { popupClose } src={close} alt="home" /></li>
                </ul>               
            </div> 
            {/* <div class="cursor-shape" ref={MouseRef}>
            </div> */}
            <div className="grid">
                <div className="grid1"></div>
                <div className="grid2"></div>
                <div className="grid3"></div>
            </div>
            <div className="logo" onClick={logo}>
                <h2 className="eng" onClick={logo}>HAJUNG'S PORTFOLIO</h2>
            </div>
            <div className="nav">
                <ul>
                    <li className="eng navBtn navAbout" onClick={handleScroll}>About</li>
                    <li className="eng navBtn navWorks" onClick={handleScroll}>Work</li>
                    <li className="eng navBtn navContact" onClick={handleScroll}>Contact</li>
                </ul>
                <div className="nav-all" onClick={allProject}>
                    <p className="eng" onClick={allProject}>ALL PROJECTS</p>
                    {/* <img src={proIcon} alt="proIcon"/> */}
                </div>
            </div>
            <main>
                <section className="About" id="About">
                    <div className="subtit tit1 eng"><span>ABOUT</span></div>
                    <div className="subNum Num1"><span>01</span></div>
                    <AboutTxt/>
                    <AboutInfo/>
                    <div className="info-myimg"><figure><img src={myImg1} alt="myimg" className="myimgFront"/><img src={myImg} alt="myimg" className="myimgBack"/></figure></div>
                </section>
                <Work/>
                <Contact/>
                <div className="last-txt">
                    <p>
                        이 포트폴리오는 비상업적 용도로 제작되었습니다.
                    </p>
                </div>
            </main>
        </div>
    );
}