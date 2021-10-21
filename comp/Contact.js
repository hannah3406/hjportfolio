import sns1 from '../img/sns1.png'
import sns2 from '../img/sns2.png'
import sns3 from '../img/sns3.png'
import sns4 from '../img/sns4.png'

export default function Contact(){
    window.addEventListener('scroll',scrollC);
    // window.removeEventListener('scroll',scrollC);


    function scrollC(){
        const elPor1 = document.querySelectorAll('.scrY1');
        let porScrollY = elPor1[0].offsetParent.offsetTop - window.innerHeight <= window.scrollY;
        elPor1.forEach((k)=>{
            if(porScrollY){
                k.classList.add('active');
            }else{
                k.classList.remove('active');
            };
        });

        const contactTxt = document.querySelectorAll('.contact-text');
        contactTxt.forEach((k)=>{
            let contactTxtY = (k.offsetParent.offsetTop + k.offsetTop) - window.innerHeight <= window.scrollY;
            if(contactTxtY){
                k.classList.add('active');
            }else{
                k.classList.remove('active');
            };
        });

        const mySns = document.querySelector('.sns-all');
        let mySnsgHeight = mySns.offsetParent.offsetTop;
        let mySnsH = (mySnsgHeight + mySns.offsetTop) - window.innerHeight <= window.scrollY;
        if(mySnsH){
            mySns.classList.add('active');
        }else{
            mySns.classList.remove('active');
        }
    }

    return(
        <section className="Contact" id="Contact">
                    <div className="subtit tit3 eng"><span>Contact</span></div>
                    <div className="subNum Num3"><span>03</span></div>
                    <div className="big-tit get scrY1">
                        <span className="text-left"><span className="eng">g</span></span>
                        <span className="text-left"><span className="eng">e</span></span>
                        <span className="text-left"><span className="eng">t</span></span>
                    </div>
                    <div className="big-tit in scrY1">
                        <span className="text-left"><span className="eng">i</span></span>
                        <span className="text-left"><span className="eng">n</span></span>
                    </div>
                    <div className="big-tit tou scrY1">
                        <span className="text-left"><span className="eng">t</span></span>
                        <span className="text-left"><span className="eng">o</span></span>
                        <span className="text-left"><span className="eng">u</span></span>
                    </div>
                    <div className="big-tit ch scrY1">
                        <span className="text-left"><span className="eng">c</span></span>
                        <span className="text-left"><span className="eng">h</span></span>
                    </div>
                    <div className="contact-text">
                        <p>저는 항상 새로운 만남과</p>
                    </div>
                    <div className="contact-text">
                        <p> 새로운 도전을 기대하고</p>
                    </div>
                    <div className="contact-text">
                        <p> 있습니다.</p>
                    </div>
                    <div className="contact-text">
                        <p>관심 있으시다면,</p>
                    </div>
                    <div className="contact-text">
                        <p><strong className="strong">연락주세요!</strong></p>
                    </div>
                    <ul className="sns-all">
                        <li>
                            <img src={sns1} alt="sns"/>
                            <div>
                                <p className="first">KakaoTalk</p>
                                <p className="second">smkhj1004</p>
                            </div>
                        </li>
                        <li>
                            <img src={sns2} alt="sns"/>
                            <div>
                                <p className="first">Email</p>
                                <p className="second">hajung3406@naver.com</p>
                            </div>
                        </li>
                        <li>
                            <img src={sns3} alt="sns"/>
                            <div>
                                <p className="first">Tel</p>
                                <p className="second">010 5779 2783</p>
                            </div>
                        </li>
                        <li>
                            <img src={sns4} alt="sns"/>
                            <div>
                                <p className="first">Git</p>
                                <p className="second">https://github.com/hannah3406</p>
                            </div>
                        </li>
                    </ul>
                </section>
    )
}