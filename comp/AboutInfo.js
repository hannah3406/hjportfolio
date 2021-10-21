import Skill from "../data/skill.json";
import React, { useRef } from 'react';

export default function AboutInfo(){
    const elDetail1 = document.querySelector('.myinfo')
    const elDetail2 = document.querySelector('.strength')
    const elDetail3 = document.querySelector('.skill-all')
    const btnSkillRef = useRef([]);
    const boxSkillRef = useRef([]);
    const btnSkill = btnSkillRef.current;
    const boxSkill = boxSkillRef.current;

    //토글
    function show1(){
        elDetail1.classList.toggle('active');
        elDetail2.classList.remove('active');
        elDetail3.classList.remove('active');
    }
    function show2(){
        elDetail2.classList.toggle('active');
        elDetail1.classList.remove('active');
        elDetail3.classList.remove('active');
    }
    function show3(){
        elDetail3.classList.toggle('active');
        elDetail2.classList.remove('active');
        elDetail1.classList.remove('active');

        // const contact = btnSkillRef.current[3].offsetParent.offsetTop-100;
        if(elDetail3.offsetTop != 0){
            window.scrollTo({ top: elDetail3.offsetTop, behavior: "smooth" });
        };

        btnSkill[0].classList.add('show');
        boxSkill[0].classList.add('show');
    }


    //탭
    const tab = (e) => {
        const active_Num = e.target.dataset.num;
        for(let i=0;i<btnSkill.length;i++){
            btnSkill[i].classList.remove('show');
            boxSkill[i].classList.remove('show');
        }

        btnSkill[active_Num].classList.add('show');
        boxSkill[active_Num].classList.add('show');

    }

    window.addEventListener('scroll',scrollA);
    // window.removeEventListener('scroll',scrollA);

    function scrollA(){
        //info 등장
        const info = document.querySelectorAll('.info');
        info.forEach((k)=>{
            let infoScrollY = (k.offsetParent.offsetTop + k.offsetTop) - window.innerHeight <= window.scrollY;
            if(infoScrollY){
                k.classList.add('active');
            }else{
                k.classList.remove('active');
            };
        });
    }

    return(
    <ul className="sub1-info">
        <li className="info info1">
            <p className="eng" onClick={show1}><small>ⅰ.</small>Profile</p>
            <div className="myinfo">
                <ul>
                    <li className="myinfo-tit">
                        <ul className="myinfo-tit-txt">
                            <li>이름</li>
                            <li>생년월일</li>
                            <li>이메일</li>
                            <li>거주지</li>
                            <li>최종학력</li>
                            <li>교육</li>
                            <li className="hide">교육</li>
                            <li className="hide">교육</li>
                            <li className="hide">교육</li>
                            <li>사회경험</li>
                        </ul>
                    </li>
                    <li className="myinfo-detail">
                        <ul className="myinfo-detail-txt">
                            <li>김하정</li>
                            <li>95.02.17</li>
                            <li>hajung3406@naver.com</li>
                            <li>경기도 용인시 기흥구</li>
                            <li>한국방송통신대학교 영문학과 졸업</li>
                            <li>그린컴퓨터아카데미 강남점<br/>UX/UI디자인 웹퍼블리셔/프론트엔드</li>
                            <li className="small smallfirst">2013~2015 금호타이어 용인연구소</li>
                            <li className="small">2015~2016 아모레퍼시픽 인재개발원</li>
                            <li className="small">2019~2020 콘센트릭스서비스코리아</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <li className="info info2" >
            <p className="eng" onClick={show2}><small>ⅱ.</small>strength</p>
            <ul className="strength">
                <li className="str-detail">
                    <figure>
                        <img src="./img/strength1.png" alt="str1"/>
                        <figcaption className="eng">POSITIVE<br/>THINKING</figcaption>
                    </figure>
                    <p>
                        <strong>오류에는 이유가 있다! 돌파구가 분명 있을 것이다!</strong>
                        예기치 못한 상황이 발생하거나, 때로는 문제가 해결되지 않는다 하더라도 부정적으로 생각하기 보다는
                        긍정적인 에너지로 주변 사람들을 아우르며
                        끝까지 해결할 수있는 의지를 가진 사람입니다. 
                    </p>
                </li>
                <li className="str-detail">
                    <figure>
                        <img src="./img/strength2.png" alt="str1"/>
                        <figcaption className="eng">LIVELY &<br/>ENQUIRING MIND</figcaption>
                    </figure>
                    <p>
                        <strong>이건 어떻게 구현이 된 것일까? 이런 방법은 어떨까?</strong>
                        하나의 사이트를 보더라도
                        보고 그냥 넘어가는 것이 아니라 어떻게 해서 이런 결과가 
                        나왔을지 생각해보고 ,
                        나라면 어떤 방식으로 해볼 수 있을지
                        적극적으로 고민해보는 자세를 지닌 사람입니다. 
                    </p>
                </li>
                <li className="str-detail">
                    <figure>
                        <img src="./img/strength3.png" alt="str1"/>
                        <figcaption className="eng">COMMUNICATION</figcaption>
                    </figure>
                    <p>
                        <strong>조직에서 하나의 물처럼 섞여들 수있는 사람!</strong>
                        저의 의견만이 아닌,
                        팀원들의 의견들에 귀기울여 들을 줄 알며, 
                        제 자신의 목표보다는 팀 전체의 목표에 녹아들어
                        생각하여 팀 전체에 큰 도움을 주기 위하여 노력하는 사람입니다.
                    </p>
                </li>
            </ul>
        </li>
        <li className="info info3" >
            <p className="eng" onClick={show3}><small>ⅲ.</small>skill</p>
            <div className="skill-all">
                <ul className="skill-tit">
                {
                    Skill.map(function(dataView,i){
                        return(
                        <li className="skill" key={i} data-num={i} ref={elem => (btnSkillRef.current[i] = elem)}  onClick={ (e) => { tab(e) } } >
                            <span data-num={i}>{dataView['tit']}</span>
                            <figure>
                                <img data-num={i} src={dataView['src1']} alt="skill"/>
                                <img data-num={i} className="imgB" src={dataView['src2']} alt="skill"/>
                            </figure>
                        </li>
                        )
                    })
                }
                </ul>
                <div className="skill-content">
                {
                    Skill.map(function(dataView,k){
                        return(
                            <div className="content" data-num={k} key={k} ref={elem => (boxSkillRef.current[k] = elem)}>
                                <p>{dataView['content1']}</p><br/>
                                <p>{dataView['content2']}</p><br/>
                                <p>{dataView['content3']}</p><br/>
                                <p>{dataView['content4']}</p><br/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </li>
    </ul>
    );
}