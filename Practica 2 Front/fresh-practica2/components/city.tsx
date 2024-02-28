import { FunctionComponent } from "preact";

export type CityProp = {
    name: string,
    latitude: number,
    longitude: number,
    country: string,
    population: number,
    is_capital: boolean
};

const City: FunctionComponent<CityProp> = (props) => {
  const { name, latitude, longitude,country,population,is_capital} = props;
  return (
    <div class="fondo">
      <h1 class={"T"}>{name}</h1>
           <hr></hr>
            <p class={"t"}>{latitude}</p>
            <p class={"t"}>{longitude}</p>
            <p class={"t"}>{country}</p>
            <p class={"t"}>{population}</p>
            <p class={"t"}>{is_capital}</p>

    </div>
  );
};


export default City;