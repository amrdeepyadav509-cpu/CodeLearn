import React, { useEffect, useState } from "react";
import API from "../../api";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());

  const load = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const add = async (e) => {
    e.preventDefault();
    const res = await API.post("/tasks", { title, description: desc });
    setTasks((prev) => [res.data, ...prev]);
    setTitle("");
    setDesc("");
  };

  const toggle = async (t) => {
    const res = await API.put(`/tasks/${t._id}`, {
      done: !t.done,
      title: t.title,
      description: t.description,
    });
    setTasks((prev) => prev.map((x) => (x._id === t._id ? res.data : x)));
  };

  const del = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };
   const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const prevDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  const nextDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));

  // Filter tasks by current date
  const filteredByDate = tasks.filter((t) => t.date === formatDate(currentDate));

  return (
    <>
      <div className="ame2" id="task">
        <div className="Amr">
          <h5 id="r2">Add Your Today Task</h5>
          <div className="task-container">
            <h1 id="r1">Task Manager</h1>


            {/* Existing React task functionality */}
            <div className="card">
              <form onSubmit={add}>
                <input id="in1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add a new task..."
                  required
                />
                <input id="in1"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Description"
                />
                <button type="submit" id="addTaskBtn">
                  Add Task
                </button>
              </form>

              <ul className="task-list">
                {tasks.map((t) => (
                  <li key={t._id} className={t.done ? "done" : ""}>
                    <div>
                      <strong>{t.title}</strong>
                      <p>{t.description}</p>
                    </div>
                    <div className="task-actions">
                      <button
                        onClick={() => toggle(t)}
                        className="edit"
                        style={{ background: "#ffc107" }}
                      >
                        {t.done ? "Undo" : "Done"}
                      </button>
                      <button
                        onClick={() => del(t._id)}
                        className="delete"
                        style={{ background: "#dc3545" }}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        /* Main Section Background */
        .ame2 {
          height: auto;
          width: 100%;
          background: linear-gradient(135deg, #89f7fe, #66a6ff);
          display: flex;
          justify-content: center;
        }

        .Amr {
          margin-top: 20px;
          font-family: 'Arial', sans-serif;
          height: auto;
          padding: 20px;
          width: auto;
        }

        #r2 {
          font-size: 30px;
          background-color: #dc3545;
          border-radius: 20px;
          margin-left: 20px;
          height: 50px;
          width: auto;
          text-align: center;
          align-items: center;
          align-content: center;
          margin-bottom: 20px;
          color: white;
          display: flex;
          justify-content: center;
          animation: bounceIn 1s ease, glowPulse 2s infinite alternate;
          box-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }

        @keyframes glowPulse {
          0% { box-shadow: 0 0 10px rgba(220, 53, 69, 0.6); }
          100% { box-shadow: 0 0 30px rgba(220, 53, 69, 1); }
        }

        #r2:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(220, 53, 69, 0.8);
        }

        .task-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 20px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          width: auto;
          max-width: 500px;
          transition: all 0.3s ease;
        }

        #r1 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 28px;
        }

        .date-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .date-nav span {
          font-weight: bold;
          font-size: 25px;
          color: #555;
        }

        .filter-nav {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .filter-nav button {
          margin: 5px;
          padding: 6px 12px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: #007bff;
          color: #fff;
          transition: all 0.2s ease;
        }

        .filter-nav button.active {
          background: #28a745;
        }

        button {
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        button:hover {
          transform: scale(1.05);
        }

        #prevDay,
        #nextDay {
          background: #007bff;
          color: #fff;
        }

        #addTaskBtn {
          background: #28a745;
          color: #fff;
          width: 100%;
          margin-bottom: 10px;
        }

#in1 {
          width: calc(100% - 12px);
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .task-list {
          list-style: none;
          padding: 0;
        }

        .task-list li {
          background: #f5f5f5;
          padding: 12px 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: grab;
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeIn 0.3s forwards;
        }

        .task-list li.dragging {
          opacity: 0.5;
          transform: scale(1.05);
          cursor: grabbing;
        }

        .task-list li.completed span {
          text-decoration: line-through;
          color: #999;
        }

        .task-actions button {
          margin-left: 5px;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
          color: #fff;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          #r1 { font-size: 20px; }
          #r2 { font-size: 20px; width: 250px; height: 40px; }
        }
      `}</style>
    </>
  );
}
