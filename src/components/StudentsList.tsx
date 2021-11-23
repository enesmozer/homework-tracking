import { Card, Spin, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getStudents, getTeacherById } from "../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import student from "../services/student";

const { Title } = Typography;

function StudentsList() {
  const dispatch = useDispatch();
  const params = useParams();
  const students = useSelector(
    (state: RootStateOrAny) => state.students.students
  );
  const teacher = useSelector(
    (state: RootStateOrAny) => state.teacher.teachers
  );
  useEffect(() => {
    dispatch(getStudents(params.teacherId));
    dispatch(getTeacherById(params.teacherId));
  }, [dispatch, params.teacherId]);
  return (
    <div className="student-wrapper">
      {students.length > 0 ? (
        <div className="class">
          <Title className="class-title">
            {teacher.name} {teacher.surname}s Classroom
          </Title>
          <div className="student-list">
            {students.map((student: any, index: number) => {
              return (
                <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/homeworks/${student.id}`}
                  key={teacher.id}
                >
                  <Card
                    key={student.id}
                    className="teacher-card"
                    cover={
                      <img
                        alt="example"
                        src={`https://i.pravatar.cc/250?img=${index}`}
                      />
                    }
                  >
                    <Meta title={`${student.name} ${student.surname}`} />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default StudentsList;
