import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import City from "../../components/city.tsx";


export type City = {
   name: string,
   latitude: number,
   longitude: number,
   country: string,
   population: number,
   is_capital: boolean
};

export const handler: Handlers = {

  async GET(_req: Request, ctx) {

    try {
    
      const url = new URL(_req.url)
      const name = url.searchParams.get("name");


      if (!name) return ctx.render(undefined)
     
      const city = await Axios.get<City[]>(
        `https://api.api-ninjas.com/v1/city?name=${name}`, {
            headers: {
                'X-Api-Key': '0m1nTFGmOMKEsmGR9R4zKA==SlN7n001T5zhcD1Z'
            }
        }
      );

      return ctx.render({
         name: city.data[0].name,
         latitude: city.data[0].latitude,
         longitude:city.data[0].longitude,
         country: city.data[0].country,
         population: city.data[0].population,
         is_capital: city.data[0].is_capital
      });

    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};


export default function Page(props: PageProps<City | undefined>) {
    try {
      const city = props.data;
      return (

        <div>

            <form method="get" action="/city">
            <input type="text" name="name" defaultValue={city?.name || ""}/>
            <button type="submit"> Enviar</button>  

            </form>
            {city && (
              <div>

              <City name={city.name} latitude={city.latitude} longitude={city.longitude} country={city.country} population={city.population} is_capital={city.is_capital}/>
        
              </div>
            )}
            
        </div>

       
      );
    } catch (e) {
      return <div>Ha habido un error</div>;
    }
  }
  