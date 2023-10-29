import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img,index }) => (
  <div className="flex flex-col px-5 py-5 rounded-[20px]  max-w-[280px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" style={{background:index%2===0? "linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)":""}}>
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[38px] h-[38px]" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
