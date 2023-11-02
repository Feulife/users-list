import { useQuery } from "@apollo/client";
import { GET_LIST } from "../../graphql/query";
import { User } from "../user/User";
import styles from "./List.module.css"


export const List = () => {
  const { data, loading, error } = useQuery(GET_LIST);

  if (error) throw error("GET_LIST error", error);

  return (
    <>
      <div>
        <div className={styles.list}>
          {loading && <>Loading...</>}
          {error && <h3>Error!</h3>}
          {!loading &&
            !error &&
            data?.list.map((user) => (
              <User key={user.id} list={user} />
            ))}
        </div>
      </div>
    </>
  );
};
