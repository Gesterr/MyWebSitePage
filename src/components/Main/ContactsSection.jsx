export default function ContactsSection(){
    function Linked(){
        alert("Аккаунта LinkedIn ещё нет))");
    }

    function CopyMail(){
        var variableToCopy = "mrcat2499@gmail.com";
      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = variableToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      setInterval(alert("Почта копирована в буфер обмена"),5000);
    }

    return(
        <section className="main__сontacts">
                {/* <!-- ВК --> */}
                <div className="main__block-of-contacts">
                    <img className='main__img' src="../src/img/ВК.jpeg" alt="" />
                    <a id='VK1' href={"https://vk.com/id_gester"} target="_blank"><div className="main__text-area">
                        <a id='VK2' className="main__text-in-img" href={"https://vk.com/id_gester"} target="_blank">ВК Аккаунт</a>
                    </div></a>
                </div>

                {/* <!-- GitHub --> */}
                <div className="main__block-of-contacts">
                      <img className="main__img" src="../src/img/github.png" alt="" />
                    <a id='Github1' href={"https://github.com/Gesterr"} target="_blank"><div className="main__text-area">
                        <a id='Github2' className="main__text-in-img" href={"https://github.com/Gesterr"} target="_blank">GitHub Аккаунт</a>
                    </div></a> 
                </div> 

                {/* <!-- LinkedIn --> */}
                <div style={{cursor:'pointer'}} className="main__block-of-contacts">
                    <img className="main__img" src="../src/img/linkedin.jpg" alt="" />
                    <a onClick={Linked} id="LinkedInk1" ><div className="main__text-area">
                        <a className="main__text-in-img" id="LinkedInk2" >LinkedInk Аккаунт</a>
                    </div></a>
                </div>

                {/* <!-- Gmail --> */}
                <div style={{cursor:'pointer'}} className="main__block-of-contacts">
                    <img style={{border:'1px solid black',cursor:'pointer'}}  className="main__img" src="../src/img/gmail.png" alt="" />
                    <a onClick={CopyMail} id="Gmail1"><div className="main__text-area">
                        <a  className="main__text-in-img" id="Gmail2" >Почта Gmail</a>
                    </div></a>
                </div>   
        </section>
    )
}