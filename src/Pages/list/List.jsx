import { useQuery } from "@apollo/client";
import { GET_LIST } from "../../graphql/query";
import Users from "../user/users";
import { Button } from "@mui/material";
import styles from "./List.module.css"


export const List = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LIST);

  if (error) throw new Error("GET_LIST error", error);

  return (
    <>
      <div>
        <div className={styles.list}>
          {console.log(data)}
          {loading && <>Loading...</>}
          {error && <h3>Error!</h3>}
          <Users usersOfList={data.users.lists} />
          
            {data.users.hasNextPage && (
              <Button
                onClick={() =>
                  fetchMore({
                    variables: {
                      cursor: data.users.cursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                      return {
                        users: {
                          cursor: fetchMoreResult.users.cursor,
                          hasNextPage: fetchMoreResult.users.hasNextPage,
                          lists: [
                            ...previousResult.users.lists,
                            ...fetchMoreResult.users.lists
                          ],
                          __typename: 'users'
                        }
                      }
                    }
                  })}>
                    Load more
              </Button>
            )}
        </div>
      </div>
    </>
  );
};
