import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://gorest.co.in/public/v2/todos";

interface TodoAPI {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
}

export default function Todo() {
  const [todo, setTodo] = useState<TodoAPI[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTodo(response.data);
        // console.log("post", todo);
      })
      .catch((error) => {
        console.log("error details", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-3">Todo Cards</h2>
      <div className="row">
        {todo.map((value) => {
          return (
            <div className="col-md-3">
              <div
                className="card my-2 mx-2"
                style={{
                  width: "18rem",
                  height: "14rem",  
                }}
              >
                <div className="card-header bg-success text-white h6">
                  User id: {value.user_id}
                </div>
                <div className="card-body">
                  <h6 className="card-title">{value.title}</h6>
                </div>
                <div className="card-footer bg-secondary text-white">{value.due_on}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
