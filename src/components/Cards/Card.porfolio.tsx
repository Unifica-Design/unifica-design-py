const CardPorfolio = ({ img, title, url, isPro }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div className="flex justify-center items-center">
      <img className="rounded-t-lg w-[80%]" src={img} alt={title} />
    </div>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-center tracking-tight text-gray-900">
          {title}
        </h5>
      </a>
      <div className="flex flex-row justify-between items-center gap-5">
        <div>
          {isPro ? (
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Pro
            </span>
          ) : (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Basico
            </span>
          )}
        </div>
        <a href={url}>
          <button
            type="button"
            className="bg-primary text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
          >
            visitar
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default CardPorfolio;
