
export default function AboutTxt(){


    window.addEventListener('scroll',scrollT);
    // window.removeEventListener('scroll',scrollT);


    function scrollT(){
        const elTxt1 = document.querySelectorAll('.sub1-text p');
        let elTxt1P = elTxt1[0].offsetParent.offsetTop;
        elTxt1.forEach((top)=>{
            let elTxtAll = (top.offsetTop + elTxt1P) - window.innerHeight <= window.scrollY;
            if(elTxtAll){
                top.classList.add('active');
            }else{
                top.classList.remove('active');
            }
        });
    }
    return(
        <>
        <div className="sub1-text">
            <div>
                <p className="sub1-text1">
                    안녕하세요!<br/>
                </p>
            </div>
            <div>
                <p>
                    프론트엔드를 희망하고 
                </p>
            </div>
            <div>
                <p>
                있는<strong className="strong">김하정</strong>입니다.
                </p>
            </div> 
        </div>
        <div className="sub1-text">
            <div>
                <p>
                프로그래밍은 멈추지 않고<br/>
                </p>
            </div> 
            <div>
                <p>
                계속해서 <strong className="strong">새롭게 </strong>
                </p>
            </div> 
            <div>
                <p>
                <strong className="strong">나아가기</strong>때문에
                </p>
            </div> 
        </div>
        <div className="sub1-text">
            <div>
                <p>
                이에 저 또한 발맞추어<br/> 
                </p>
            </div> 
            <div>
                <p>
                <strong className="strong">끊임없이 도전</strong>하고<br/>
                </p>
            </div> 
            <div>
                <p>노력해야 한다는 점이</p>
            </div> 
        </div>
        <div className="sub1-text">
            <div>
                <p >프론트엔드를 꿈꾸는<br/>
                </p>
            </div> 
            <div>
                <p>
                큰 이유가 되는 것
                </p>
            </div> 
            <div>
                <p>
                같습니다.
                </p>
            </div> 
        </div>
        <div className="sub1-text">
            <div>
                <p>
                무언가를 구현하는 것에<br/>
                </p>
            </div> 
            <div>
                <p>
                하나의 방법만 생각하는
                </p>
            </div> 
            <div>
                <p>
                것이 아니라
                </p>
            </div>
        </div>
        <div className="sub1-text">
            <div>
                <p>
                <strong className="strong">다양한 관점</strong>에서 분석
                </p>
            </div> 
            <div>
                <p>
                하고 고민할 수 있도록<br/>
                </p>
            </div> 
            <div>
                <p>
                지속적으로 노력하여
                </p>
            </div> 
        </div>
        <div className="sub1-text">
            <div>
                <p>
                <strong className="strong">아이디어</strong>가 넘치면서도<br/>
                </p>
            </div> 
            <div>
                <p>
                <strong className="strong">꼼꼼한 개발자</strong>가 되고<br/>
                </p>
            </div> 
            <div>
                <p>
                싶습니다!
                </p>
            </div> 
        </div>
        </>
    );
}