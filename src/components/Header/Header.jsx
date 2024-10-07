
import headerImg from "../../assets/header-img.png"
const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#FFF280] to-[#FFC700] flex items-center gap-4 ">
            <img src={headerImg} alt="" />
            <div>
                <h1><span className="text-[100px] text-[#F76902D1]">History Of</span> <br />
                ALABAY</h1>
                <p>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
            </div>
        </div>
    );
};

export default Header;