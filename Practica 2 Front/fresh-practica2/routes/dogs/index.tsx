import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Dogs from "../../components/dogs.tsx";

export type Dogs = {
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

export const handler: Handlers = {

  async GET(_req: Request, ctx) {
    try {
    
      const url = new URL(_req.url)
      const name = url.searchParams.get("name") || undefined;
     
      if (!name) return ctx.render(undefined)

      const dogs = await Axios.get<Dogs[]>(
        `https://api.api-ninjas.com/v1/dogs?name=${name}`, {
            headers: {
                'X-Api-Key': '0m1nTFGmOMKEsmGR9R4zKA==SlN7n001T5zhcD1Z'
            }
        }
      );
       
      return ctx.render({
         name: dogs.data[0].name,
         image_link: dogs.data[0].image_link,
         max_height_male:dogs.data[0].max_height_male,
         max_height_female: dogs.data[0].max_height_female,
         max_weight_male: dogs.data[0].max_weight_male,
         max_weight_female: dogs.data[0].max_weight_female,

         good_with_children: dogs.data[0].good_with_children,
         good_with_other_dogs: dogs.data[0].good_with_other_dogs,
         good_with_strangers: dogs.data[0].good_with_strangers,
      });

    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};


export default function Page(props: PageProps<Dogs>) {
    try {
      const dog = props.data;

      return (

        <div>

            <form method="get" action="/dogs">
            <input type="text" name="name" defaultValue={dog?.name || ""}/>
            <button type="submit"> Enviar</button>  

            </form>

            {dog && (
                <div>

              <Dogs name={dog.name} max_height_male={dog.max_height_male} max_height_female={dog.max_height_female} max_weight_male={dog.max_weight_male} max_weight_female={dog.max_weight_female} good_with_children={dog.good_with_children} good_with_other_dogs={dog.good_with_other_dogs} good_with_strangers={dog.good_with_strangers} image_link={dog.image_link}/>



                </div>
            
            )}
            

        </div>

       
      );
    } catch (e) {
      return <div>Ha habido un error</div>;
    }
  }
  
