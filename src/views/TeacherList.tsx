import { Card, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTeachers } from "../redux/actions/index";

function TeacherList() {
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state: RootStateOrAny) => state.teacher.teachers
  );
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("loginUser") || "{}");

  useEffect(() => {
    if (loginUser.role !== "principle") {
      localStorage.removeItem("loginUser");
      navigate("/login");
    }
  }, [navigate, loginUser]);

  return (
    <div className="teacher-list">
      {teachers.length > 0 ? (
        teachers.map((teacher: any, index: number) => {
          return (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/students/${teacher.id}`}
              key={teacher.id}
            >
              <Card
                key={teacher.id}
                className="teacher-card"
                cover={
                  <img
                    alt="example"
                    src={`https://i.pravatar.cc/300?img=${index + 25}`}
                  />
                }
              >
                <Meta title={`${teacher.name} ${teacher.surname}`} />
              </Card>
            </Link>
          );
        })
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default TeacherList;
