import PropTypes from "prop-types";

const ExperienceCard = ({data}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:py-5 mb-8 dark:bg-gray-800">
      <figure className="lg:w-[800px] p-2">
        <img
          src={data.img}
          className='h-40'
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <a className="card-title border-none">
          {data.heading}
        </a>
        <p>
          {data.description}
        </p>
        <p className="text-gray-500 dark:text-gray-200">Date : {data.date}</p>
        <div className="card-actions">
           
          <h3 className="font-bold">{data.title} : </h3>
          {data.links.map((link, index) => (
          <div key={index}  >
            <a className="text-blue-500" href={link.url}>{link.title}</a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default ExperienceCard;

