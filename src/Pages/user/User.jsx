import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_LIST_MUTATION,
  EDIT_LIST_MUTATION,
} from "../../graphql/mutation";

import { GET_LIST } from "../../graphql/query";
import style from "./User.modal.css";

export const User = ({ list }) => {
  const [deleteListMutation] = useMutation(DELETE_LIST_MUTATION, {
    refetchQueries: [{ query: GET_LIST }],
  });

  const deleteList = () => {
    deleteListMutation({
      variables: {
        id: list.id,
      },
    })
  };

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(list.name);
  const [surname, setSurname] = useState(list.surname);
  const [email, setEmail] = useState(list.email);
  const [telephone, setTelephone] = useState(list.telephone);
  const [birthday, setBirthday] = useState(list.birthday);
  const [editListMutation] = useMutation(EDIT_LIST_MUTATION, {
    refetchQueries: [{ query: GET_LIST }],
  });
  const [visible, setVisible] = useState(Boolean);

  const saveChanges = () => {
    editListMutation({
      variables: {
        id: list.id,
        name: name,
        surname: surname,
        email: email,
        telephone: telephone,
        birthday: birthday
      },
    });
    setIsEditing(false);
  };

  const discardChanges = () => {
    setIsEditing(false)
    setName(list.name)
    setSurname(list.surname)
    setEmail(list.email)
    setTelephone(list.telephone)
    setBirthday(list.birthday)
  };

  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div>
        {/* <h3 className="titleinfo">{recipe.title}</h3>
        {recipe.createdAt}
        <button
          className="recipeinfo"
          onClick={() => {
            setVisible(true);
          }}
        >
          Know more...
        </button> */}
        <div
          className={rootClasses.join(" ")}
          onClick={() => setVisible(false)}
        >
          <div className="thumb_container" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3 className="titleinfo">{list.name}</h3>
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              ) : (
                <></>
              )}
              {isEditing ? (
                <input
                  type="text"
                  class="form-outline w-100"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              ) : (
                <div className="desc">
                  <p>
                    {list.surname}
                  </p>
                </div>
              )}
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>{list.email}</b>
                  </p>
                </div>

              )}
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>{list.telephone}</b>
                  </p>
                </div>

              )}
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>{list.birthday}</b>
                  </p>
                </div>

              )}

              {isEditing ? (
                <>
                  <button
                    className="btn btn-success mr-2"
                    onClick={saveChanges}
                  >
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={discardChanges}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={deleteList}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}