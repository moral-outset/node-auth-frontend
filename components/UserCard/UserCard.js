import Image from "next/image";
import classes from "./UserCard.module.css";
import Link from 'next/link'

function UserCard(props) {

  const myLoader = ({ src }) => {
    return `https://identicon-api.herokuapp.com/${props.userInfo._id}/1000?format=png`;
  };

  return (
  <Link href={`/users/${props.userInfo._id}`} passHref>
    <div className={classes.itemContainer}>
      <Image
        className={classes.avatar}
        loader={myLoader}
        src={`https://identicon-api.herokuapp.com/${props.userInfo._id}/1000?format=png`}
        alt="profileimage"
        width={64}
        height={64}
      />
      <h1>{props.userInfo.name}</h1>      
    </div>
  </Link>
    
  );
}

export default UserCard;
