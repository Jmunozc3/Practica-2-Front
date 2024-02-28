import { FunctionComponent } from "preact";

export type DogsProps = {
    name: string,
    image_link: string,
    max_height_male: number,
    max_height_female:number,
    max_weight_male: number,
    max_weight_female: number,
    good_with_children: number,
    good_with_other_dogs: number,
    good_with_strangers: number,
 
 };

const Dogs: FunctionComponent<DogsProps> = (props) => {
  const { name, image_link, max_height_female,max_height_male,max_weight_female,max_weight_male,good_with_children,good_with_other_dogs,good_with_strangers } = props;
  return (
    <div class={"fondo2"}>
      <h1  class={"T"}>{name}</h1>
            
            <p class={"t2"}> Altura maxima macho:{max_height_male}</p>
            <p class={"t2"}>  Altura maxima hembra:{max_height_female}</p>
            <p class={"t2"}> Peso maximo macho:{max_weight_male}</p>
            <p class={"t2"}> Peso maximo hembra:{max_weight_female}</p>
            <p class={"t2"}> Buenos con niños:{good_with_children}</p>
            <p class={"t2"}> Buenos con perros:{good_with_other_dogs}</p>
            <p class={"t2"}> Buenos con extraños:{good_with_strangers}</p>
            <img class="imagen" src={image_link}/>

    </div>
  );
};


export default Dogs;