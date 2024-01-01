import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_LIST_MUTATION,
  EDIT_LIST_MUTATION,
} from "../../graphql/mutation";

import { GET_LIST } from "../../graphql/query";
import style from "./User.modal.css";

export const User = ({ user  }) => {
  const [deleteListMutation] = useMutation(DELETE_LIST_MUTATION, {
    refetchQueries: [{ query: GET_LIST }],
  });

  const deleteList = () => {
    deleteListMutation({
      variables: {
        id: user.id,
      },
    })
  };

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [telephone, setTelephone] = useState(user.telephone);
  const [birthday, setBirthday] = useState(user.birthday);
  const [editListMutation] = useMutation(EDIT_LIST_MUTATION, {
    refetchQueries: [{ query: GET_LIST }],
  });
  const [visible, setVisible] = useState(Boolean);

  const saveChanges = () => {
    editListMutation({
      variables: {
        id: user.id,
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
    setName(user.name)
    setSurname(user.surname)
    setEmail(user.email)
    setTelephone(user.telephone)
    setBirthday(user.birthday)
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
          <div className="thumb_container card" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3 className="titleinfo">{user.name} {user.surname}</h3>
              {isEditing ? (
                <input className="editField"
                class="form-outline w-100"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              ) : (
                <></>
              )}
              {isEditing ? (
                <input className="editField"
                  type="text"
                  class="form-outline w-100"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              ) : (
                <div className="desc">
                  <p></p>
                </div>
              )}
              {isEditing ? (
                <input className="editField"
                class="form-outline w-100"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>Email: {user.email}</b>
                  </p>
                </div>

              )}
              {isEditing ? (
                <input className="editField"
                class="form-outline w-100"
                  type="text"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>Telephone: {user.telephone}</b>
                  </p>
                </div>

              )}
              {isEditing ? (
                <input className="editField"
                class="form-outline w-100"
                  type="text"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <p>
                    <b>Birthday: {user.birthday}</b>
                  </p>
                </div>

              )}

              {isEditing ? (
                <>
                  <button
                    className="btnSave"
                    onClick={saveChanges}
                  >
                    Save
                  </button>
                  <button className="btnCancel"
                  onClick={discardChanges}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btnEdit"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button className="btnDelete" onClick={deleteList}>
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