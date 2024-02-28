import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import User from "../../components/user.tsx";

export type Characters = {
   username: string,
   sex: string,
   address: string,
   name: string,
   email: string,
   birthday: string
};

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Characters>) {
    try {
      const { id } = ctx.params;
      const character = await Axios.get<Characters>(
        `https://api.api-ninjas.com/v1/randomuser`, {
            headers: {
                'X-Api-Key': '0m1nTFGmOMKEsmGR9R4zKA==SlN7n001T5zhcD1Z'
            }
        }
      );

      return ctx.render({
        username: character.data.username,
         sex: character.data.sex,
         address:character.data.address,
         name: character.data.name,
         email: character.data.email,
         birthday: character.data.birthday,
      });
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

export default function Page(props: PageProps<Characters>) {
  try {
    const character = props.data;
    return (
      <div>

        <User name={character.name} email={character.email} sex={character.sex} address={character.address}/>
       
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}