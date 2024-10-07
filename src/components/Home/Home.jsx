import cover from "../../assets/cover.png";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div>
      {/* Fixed Background Div */}
      <div
        className="h-screen z-0 fixed top-0 left-0 w-full"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between py-6 h-screen gap-4">
          <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-[#FFF280] to-[#7EFF5E] text-[148px] text-center border-current border-[#0F1B29] border-8 ">
            welcome to alabay world
          </h1>
          <div className="bg-[#181C27] w-full">
            <h4 className="text-[#FFFFFF] text-center p-4 text-5xl">
              WHERE THE{" "}
              <span className="text-[#FDE047]">
                LEGENDARY CENTRAL ASIAN SHEPHERD DOG
              </span>{" "}
              MEETS A NEW-AGE ADVENTURE.
              <span className="text-[#FDE047]">JOIN US</span> IN CELEBRATING THE{" "}
              <span className="text-[#FDE047]">STRENGTH, LOYALTY,</span> AND{" "}
              <span className="text-[#FDE047]">HERITAGE</span> OF THE ALABAY
              BREED.
            </h4>
          </div>
        </div>
      </div>

      {/* Scrolling Div */}
      <div className="min-h-screen z-10 absolute flex flex-col p-20 top-96 rounded-lg">
        <Header />
        <Header />
      </div>
    </div>
  );
}
