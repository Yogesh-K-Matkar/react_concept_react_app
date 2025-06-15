export const Practices = () => {
  const students = [1, 2];

  return (
    <>
      <p>{students.length === 0 && "No students found."}</p>
      <p>Numbers of Students: {students.length}</p>
    </>
  );
};
