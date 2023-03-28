import "./Options.css";

const Options = ({countries}) => {
  console.log(countries)
  return (
    <div className="options">
      {countries.forEach(e => {
        <p>e</p>
      })}

      {/* {props.cities.map((city) => {
        return (
          <div>
            {city.name}
          </div>
        );
      })} */}

    </div>
  );
};

export default Options;
