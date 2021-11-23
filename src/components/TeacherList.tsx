import { Card, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../redux/actions/index";

function TeacherList() {
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state: RootStateOrAny) => state.teacher.teachers
  );
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div className="teacher-list">
      {teachers.length > 0 ? (
        teachers.map((teacher: any) => {
          return (
            <Card
              id={teacher.id}
              className="teacher-card"
              cover={
                <img
                  alt="example"
                  src="https://picsum.photos/seed/picsum/200/300"
                />
              }
            >
              <Meta title={`${teacher.name} ${teacher.surname}`} />
            </Card>
          );
        })
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default TeacherList;
