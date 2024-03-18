export default function ProjectSection(){
    return(
        <section className="main__projects">
                {/* <!-- Калькулятор --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjCalculator.png" alt="" />
                    <a href="../src/projects/сalculator/index.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/сalculator/index.html" target="_blank">Calculator</a>
                    </div></a>
                    <p>Это первые попытки в математическое обращение с переменными</p>
                </div>
                {/* <!-- CameCaseConverter --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjCameCaseConv.png" alt=""/>
                    <a href="../src/projects/CaMeLcAsEcOnVeRtEr/index.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/CaMeLcAsEcOnVeRtEr/index.html" target="_blank">CameCaseConverter</a>
                    </div></a>
                    <p>Это сайт по преобразовыванию текста в CaMeL текст</p>
                </div>
                {/* <!-- StrangeWord --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjStrangeWord.png" alt=""/>
                    <a href="../src/projects/StrangeWord/index.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/StrangeWord/index.html" target="_blank">StrangeWord</a>
                    </div></a>
                    <p>Просто сайт с рандомными словами и их определениями</p>
                </div>
                {/* <!-- DohTechCenter --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjDoxTechCenter.png" alt=""/>
                    <a href="../src/projects/DonTechCenter/index2.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/DonTechCenter/index2.html" target="_blank">DohTechCenter</a>
                    </div></a>
                    <p>Это мой первый коммерческий проект, который провалился</p>
                </div>
                {/* <!-- Currency Converter --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjCurrencyConverter.png" alt=""/>
                    <a href="../src/projects/Currency Converter/index.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/Currency Converter/index.html" target="_blank">Currency Converter</a>
                    </div></a>
                    <p>Первая моя работа с API / Простенький конвертер валют</p>
                </div>
                {/* <!-- RiskOfRain2Items --> */}
                <div className="main__block-of-projects ">
                    <img className="main__img main_border" src="../src/img/prjRiskOfRain2Items.png" alt=""/>
                    <a href="../src/projects/RiskOfRain2Items/index.html" target="_blank"><div className="main__text-area">
                        <a className="main__text-in-img" href="../src/projects/RiskOfRain2Items/index.html" target="_blank">Risk Of Rain 2 Items</a>
                    </div></a>
                    <p>Сайт по игре Risk Of Rain 2</p>
                </div>
        </section>
    )
}