import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHomeworksByStudent } from "../redux/actions";
import { Spin, Switch, Table, Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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
    {
      title: "Upload",
      dataIndex: "",
      key: "",
      render: (text: string, record: any) => (
        <Upload
          {...props}
          onChange={(info: any) => {
            if (info.file.status !== "uploading") {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
              message.success(`${info.file.name} file uploaded successfully`);
              record.isDone = true;
            } else if (info.file.status === "error") {
              message.error(`${info.file.name} file upload failed.`);
            }
          }}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      ),
    },
  ];
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("loginUser") || "{}");
  useEffect(() => {
    if (
      loginUser.role !== "principle" &&
      loginUser.studentId !== params.studentId
    ) {
      localStorage.removeItem("loginUser");
      navigate("/login");
    }
  }, [navigate, loginUser, params.studentId]);

  const props = {
    name: "file",
    action: "https://jsonplaceholder.typicode.com/posts/",
    headers: {
      authorization: "authorization-text",
    },
  };
  return (
    <div className="homework">
      {homeworks.length > 0 ? (
        <div className="homework-list">
          {homeworks.map((homework: any) => {
            return (
              <div className="homework-item" key={homework.id}>
                <Table
                  columns={columns}
                  dataSource={homeworks}
                  key={homework.id}
                />
                ,
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
