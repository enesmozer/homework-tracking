import { render } from "@testing-library/react";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHomeworksByStudent } from "../redux/actions";
import { Spin, Switch, Table } from "antd";

function HomeworkList() {
  const dispatch = useDispatch();
  const params = useParams();
  const homeworks = useSelector(
    (state: RootStateOrAny) => state.homework.homeworks
  );
  useEffect(() => {
    dispatch(getHomeworksByStudent(params.studentId));
  }, [dispatch, params.studentId]);

  function completeHomeWork(checked: boolean): void {
    console.log(`switch to ${checked}`);
  }
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
      render: (deadline: string) => deadline.replace("T", " ").substring(0, 19),
    },
    {
      title: "Done",
      dataIndex: "isDone",
      key: "isDone",
      render: (isDone: boolean) => (
        <Switch checked={isDone} onChange={completeHomeWork} />
      ),
    },
  ];

  return (
    <div className="homework">
      {homeworks.length > 0 ? (
        <div className="homework-list">
          {homeworks.map((homework: any) => {
            return (
              <div className="homework-item" key={homework.id}>
                <Table columns={columns} dataSource={homeworks} />,
              </div>
            );
          })}
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
}
export default HomeworkList;
