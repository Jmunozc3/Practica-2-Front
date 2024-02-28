import { FunctionComponent } from "preact";

type CharacterProp = {
    username?: string,
    sex?: string,
    address?: string,
    name?: string,
    email?: string,
    birthday?: string
 };

const User: FunctionComponent<CharacterProp> = (props) => {
  const { username, sex, address,name,email,birthday } = props;
  return (
    <div class="fondo">
      
      <img class={"img"} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      <h1 class={"T"}>{name}</h1>
      <hr></hr>
      
      <p class={"t"}>{email}</p>
      <p class={"t"}>{sex}</p>
      <p class={"t"}>{address}</p>
      

    </div>
  );
};

export default User;