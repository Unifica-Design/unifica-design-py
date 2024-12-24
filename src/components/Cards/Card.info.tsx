const CardInfo = ({ Icon, title }) => (
  <div className="w-full max-w-sm rounded-lg shadow backdrop-blur-sm bg-white/10">
    <div className="flex flex-col items-center pb-1 pt-8">
      <div>
        <Icon />
      </div>
      <h5 className="mb-1 font-medium text-white text-center text-base p-8">
        {title}
      </h5>
    </div>
  </div>
);

export default CardInfo;
